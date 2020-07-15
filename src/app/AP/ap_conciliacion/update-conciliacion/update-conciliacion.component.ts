import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conciliacion } from 'src/app/conciliacion';
import { ConciliacionService } from 'src/app/conciliacion.service';

@Component({
  selector: 'app-update-conciliacion',
  templateUrl: './update-conciliacion.component.html',
  styleUrls: ['./update-conciliacion.component.scss']
})
export class UpdateConciliacionComponent implements OnInit {

 
  employee: Conciliacion = new Conciliacion();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: ConciliacionService,
    private router: Router) { }

    ngOnInit() {
    }

    newEmployee(): void {
      this.employee = new Conciliacion();
    }

    save() {

      this.employee.user_id="3";
      this.employeeService.createEmployee(this.employee)
        .subscribe(data => 
          {
            console.log(data);
            this.alertDisables = false;
            this.alertMessages ="Se inserto la acredor correctamente";
            this.employee= new Conciliacion();
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

 onSubmit() 
  {

  this.alertDisable = true;
  this.alertDisables = true;

  if(this.employee.concilitiation_origin =="" ||  this.employee.concilitiation_origin ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  }



  else{
    this.save();    
  }
 }

  gotoList() 
  {
    this.router.navigate(['creditor-list']);
  }

}