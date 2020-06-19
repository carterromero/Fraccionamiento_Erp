import { Component, OnInit } from '@angular/core';
import { SubInventarys } from 'src/app/subinventarys';
import { Observable } from 'rxjs';
import { SubInventarysService } from 'src/app/subinventarys.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subinventarys-list',
  templateUrl: './subinventarys-list.component.html',
  styleUrls: ['./subinventarys-list.component.scss']
})
export class SubinventarysListComponent implements OnInit {

  general: Observable<SubInventarys[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: SubInventarysService,
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
          this.alertMessages ="El Sub inventario se a eliminado correctamente";
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
    this.router.navigate(['sub_inventarys-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-subinventarys', id]);
  }

}
