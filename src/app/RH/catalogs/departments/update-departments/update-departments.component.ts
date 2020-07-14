import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from "src/app/departments.service";
import { Departments } from "src/app/departments";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-departments',
  templateUrl: './update-departments.component.html',
  styleUrls: ['./update-departments.component.scss']
})
export class UpdateDepartmentsComponent implements OnInit {

  id: number;
  department: Departments;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";




  constructor(private route: ActivatedRoute,private router: Router,
    private departmentService: DepartmentsService) {}

  ngOnInit() {
    this.department = new Departments();


    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.department.departments_status);
    this.departmentService.getDepartment(this.id)
      .subscribe(data => {
        console.log(data);
        this.department = data;
        this.department.departments_status = (String(this.department.departments_status) == "false") ? null:"false";
        console.log(this.department.departments_status);
      }, error => {
        console.log(error);
        
      });
      
  }

  updateDepartment() {
    console.log(this.department);
    console.log(this.id);
    

      this.department.last_update_by= 17;
      this.departmentService.updateDepartment(this.id, this.department)
      .subscribe(data => {console.log(data);
        this.gotoList();  
            this.alertDisables = false;
            this.alertMessages ="Se actualizo el departamento";
            this.gotoList();
          }, 
        error => {
          console.log(error);    
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = "No se puede agregar el nombre esta duplicado";
          }      
        });
  
  }

  onSubmit() { 

    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.department.departments_name == "" ||  this.department.departments_name == null){
      this.alertDisable = false;
      this.alertMessage = "Departamento incompleto o repetido";          
    }

    else{
      this.updateDepartment();    
    }
  }

  gotoList() {
    this.router.navigate(['departments-list']);
  }


}
