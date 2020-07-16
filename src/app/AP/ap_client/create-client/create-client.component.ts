import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {


  employee: Client = new Client();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: ClientService,
    private router: Router) { }

    ngOnInit() {
    }

    newEmployee(): void {
      this.employee = new Client();
    }

    save() {
     // this.employee.created_by = Number(localStorage.getItem('id'));
      this.employee.user_id="3";
      this.employeeService.createEmployee(this.employee)
        .subscribe(data => 
          {
            console.log(data);
            this.alertDisables = false;
            this.alertMessages ="Se inserto  correctamente";
            this.employee= new Client();
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

  if(this.employee.cliente_name_cliente =="" ||  this.employee.cliente_name_cliente ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre Incompleto";          
  }




  else{
    this.save();    
  }
 }

  gotoList() 
  {
    this.router.navigate(['client-list']);
  }

}