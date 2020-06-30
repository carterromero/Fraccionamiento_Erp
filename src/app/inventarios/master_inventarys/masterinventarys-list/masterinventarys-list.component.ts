import { Component, OnInit } from '@angular/core';
import { MasterInventarysService } from 'src/app/masterinventarys.service';
import { Router } from '@angular/router';
import { MasterInventarys } from 'src/app/masterinventarys';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-masterinventarys-list',
  templateUrl: './masterinventarys-list.component.html',
  styleUrls: ['./masterinventarys-list.component.scss']
})
export class MasterinventarysListComponent implements OnInit {

  general: Observable<MasterInventarys[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: MasterInventarysService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList(1).subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeList(1);
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
          this.alertMessages ="La sub categoria se a eliminado correctamente";
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
    console.log(id);
        this.router.navigate(['master1-details', id]);
      }
    
      updateGeneral(id: number){
        this.router.navigate(['update-masterinventarys', id]);
      }
}
