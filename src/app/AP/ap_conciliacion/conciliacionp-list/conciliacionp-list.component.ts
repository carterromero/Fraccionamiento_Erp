import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Conciliacion } from 'src/app/conciliacion';
import { ConciliacionService } from 'src/app/conciliacion.service';
import { Observable } from 'rxjs';
import { Creditor } from 'src/app/creditor';
import { CreditorService } from 'src/app/creditor.service';

@Component({
  selector: 'app-conciliacionp-list',
  templateUrl: './conciliacionp-list.component.html',
  styleUrls: ['./conciliacionp-list.component.scss']
})
export class ConciliacionpListComponent implements OnInit {


  general: Observable<Conciliacion[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  employee: Creditor = new Creditor();
  constructor(private generalService: ConciliacionService,
    private employeeService: CreditorService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
 

  onSubmit() 
  {
     this.employeeService.getEmployeeList();
    this.employee.creditor_id = 1;
    console.log(this.employee);
  
 
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
          this.alertMessages =" se a eliminado correctamente";
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
    this.router.navigate(['conciliacion-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-conciliacion', id]);
  }


}

