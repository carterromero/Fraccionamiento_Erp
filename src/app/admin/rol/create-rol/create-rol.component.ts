import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/services/admin/rol';
import { RolService } from 'src/app/services/admin/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-rol',
  templateUrl: './create-rol.component.html',
  styleUrls: ['./create-rol.component.scss']
})
export class CreateRolComponent implements OnInit {

  employee: Rol = new Rol();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: RolService,
    private router: Router) { }

  ngOnInit() {
  }

  save() {

    this.employee.userid="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se agrego el rol correctamente";
          this.employee= new Rol();
        }, 
      error => {
        console.log(error);    
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = "El rol esta duplicado, no se puede agregar";          
        }      
      });
  }

  onSubmit() 
  {

  this.alertDisable = true;
  this.alertDisables = true;

  if(this.employee.rol_description =="" ||  this.employee.rol_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "Nombre de rol incompleto, este atributo es obligatorio";          
  }

 
  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['rols-list']);
  }

}
