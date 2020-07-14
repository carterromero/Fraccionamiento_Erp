import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WorkplacesService } from "src/app/workplaces.service";
import { Workplaces } from "src/app/workplaces";
import { Router } from '@angular/router';

@Component({
  selector: "app-workplaces-list",
  templateUrl: "./workplaces-list.component.html",
  styleUrls: ["./workplaces-list.component.scss"]
})
export class WorkplacesListComponent implements OnInit {
  workplaces: Observable<Workplaces[]>;
  elements: any = [];
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private workplaceService: WorkplacesService,
    private router: Router) {}

  ngOnInit() {    
    this.reloadData();
  }

  reloadData() {
    /*localStorage.setItem('token', "");*/
    /*this.employees = this.employeeService.getEmployeeList();*/
    this.workplaceService.getWorkplaceList().subscribe(
      data => {
        console.log(data);
        this.workplaces = this.workplaceService.getWorkplaceList();
      },
      error => {
        console.log(error);
   //  localStorage.setItem('token', "");
    //  this.router.navigate(['auth/signin']);     
      });
  }

  deleteWorkplace(id: number) {
    this.workplaceService.deleteWorkplace(id)
      .subscribe(
        data => {
          console.log(data);
          this.alertDisables = false;
          this.alertMessage ="Se elimino correctamente";
        },
        error => {
          console.log(error);
          this.alertDisable = false;
          this.alertMessages = "El registro no se puede eliminar, tiene una dependencia";
        });
  }
  workplaceDetails(id: number){
    console.log(id);
    this.router.navigate(['workplaces-details', id]);
  }

  updateWorkplace(id: number){
    console.log(id);
    this.router.navigate(['update-workplaces', id]);
  }
}