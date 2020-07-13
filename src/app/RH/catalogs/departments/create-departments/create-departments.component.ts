import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/departments.service';
import { Departments } from 'src/app/departments';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-departments',
  templateUrl: './create-departments.component.html',
  styleUrls: ['./create-departments.component.scss']
})
export class CreateDepartmentsComponent implements OnInit {
  
  department: Departments = new Departments();
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  myForm: FormGroup;


  constructor(private departmentService: DepartmentsService,
    private router: Router, public fb: FormBuilder) {
      this.myForm = this.fb.group({
        departments_name: ['', [Validators.required]]
      });
     }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.department = new Departments();
  }

  save() {
    this.departmentService.createDepartment(this.department)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
     //   this.router.navigate(['auth/signin']);
      });
    this.department = new Departments();
    this.gotoList();
  }

  onSubmit() {
   this.submitted = true;
    this.alertDisable = true;
    this.alertDisables = true;
    this.submitted = true;
  
    if (this.myForm.valid) {
      console.log(this.myForm.value)
      this.save();    
    }
    else{
      alert("Faltan datos")
    }   
  }

  gotoList() {
    this.router.navigate(['departments-list']);
  }
}