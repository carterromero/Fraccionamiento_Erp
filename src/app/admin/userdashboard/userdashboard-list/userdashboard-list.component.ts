import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDashboard } from 'src/app/services/admin/userdashboard';
import { UserdashboardngService } from 'src/app/services/admin/userdashboardng.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userdashboard-list',
  templateUrl: './userdashboard-list.component.html',
  styleUrls: ['./userdashboard-list.component.scss']
})
export class UserdashboardListComponent implements OnInit {

  id: number;
  general: Observable<UserDashboard[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: UserdashboardngService,
    private router: Router,
    private route: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.id = this.route.firstChild.snapshot.params['id']

    this.generalService.getEmployeeList(this.id).subscribe(
      data => {
        this.general = this.generalService.getEmployeeList(this.id);
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }


  deleteGeneral(id: number) {
    this.alertDisable = true;
    this.alertDisables = true;
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="El Dashboard se a eliminado correctamente";
        },
        error => {
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }  
        }
      );
  }
 

  generalDetails(id: number){
    this.router.navigate(['details-userd', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-userd', id]);
  }

  asignar(){
    this.router.navigate(['create-userd', this.id]);
  }

}
