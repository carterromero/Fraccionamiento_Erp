import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/services/admin/rol';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from 'src/app/services/admin/rol.service';

@Component({
  selector: 'app-update-rol',
  templateUrl: './update-rol.component.html',
  styleUrls: ['./update-rol.component.scss']
})
export class UpdateRolComponent implements OnInit {

  id: number;
  employee: Rol;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: RolService) { }

  ngOnInit() {

    this.employee = new Rol();
    this.id = this.route.firstChild.snapshot.params['id']
  
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.rol_status = (String(this.employee.rol_status) == "false") ? null:"false";
        
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
  }

   

  updateEmployee() {

    this.employee.userid="3";

    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo el rol correctamente";
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

  onSubmit() {
    

    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.rol_description =="" ||  this.employee.rol_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "Descripción Incompleto";          
    }
  
  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['rols-list']);
  }

}
