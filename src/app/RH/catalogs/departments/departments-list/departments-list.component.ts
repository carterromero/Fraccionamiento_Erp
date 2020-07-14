import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DepartmentsService } from "src/app/departments.service";
import { Departments } from "src/app/departments";
import { Router } from '@angular/router';

@Component({
  selector: "app-departments-list",
  templateUrl: "./departments-list.component.html",
  styleUrls: ["./departments-list.component.scss"]
})
export class DepartmentsListComponent implements OnInit {
  departments: Observable<Departments[]>;
  elements: any = [];
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private departmentService: DepartmentsService,
    private router: Router) {}

  ngOnInit() {    
    this.reloadData();
  }

  reloadData() {
    this.departmentService.getDepartmentList().subscribe(
      data => {
        console.log(data);
        this.departments = this.departmentService.getDepartmentList();
      },
      error => {
        console.log(error);
        localStorage.setItem('token', "");
        this.router.navigate(['auth/signin']);     
      });
  }

  deleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id)
      .subscribe(
        data => {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se elimino correctamente";
          this.reloadData();
        },
        error => {
          console.log(error);
          this.alertDisable = false;
          this.alertMessage = "El registro no se puede eliminar, tiene una dependencia";
        });
  }

  departmentDetails(id: number){
    console.log(id);
    this.router.navigate(['departments-details', id]);
  }

  updateDepartment(id: number){
    console.log(id);
    this.router.navigate(['update-departments', id]);
  }
}