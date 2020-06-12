import { Component, OnInit } from '@angular/core';
import { Condominums } from 'src/app/services/admin/condominums';
import { Observable } from 'rxjs';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condominums-list',
  templateUrl: './condominums-list.component.html',
  styleUrls: ['./condominums-list.component.scss']
})
export class CondominumsListComponent implements OnInit {

  general: Observable<Condominums[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: CondominumsService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeList();
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
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="El fraccionamiento se a eliminado correctamente";
        },
        error => {console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        }
      );
  }

  generalDetails(id: number){
    this.router.navigate(['condominums-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-condominums', id]);
  }


}
