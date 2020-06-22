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

  constructor(private route: ActivatedRoute,private router: Router,
    private departmentService: DepartmentsService) { }

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

    
    
    this.department.last_update_by=3;
    console.log(this.department);
    
 console.log(this.id);
    
    
    this.departmentService.updateDepartment(this.id, this.department)
      .subscribe(data => {console.log(data);
        this.gotoList();  
      }, 
      error => {
        console.log(error);
        
      });
    
  
  }

  onSubmit() {
    this.updateDepartment();    
  }

  gotoList() {
    this.router.navigate(['departments-list']);
  }


}
