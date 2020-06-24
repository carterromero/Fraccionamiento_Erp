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

  constructor(private workplaceService: WorkplacesService,
    private router: Router) {}

  ngOnInit() {    
    this.reloadData();

    for (let i = 1; i <= 11; i++) {
      this.elements.push({
        id: i,
        first: {nick: 'Nick ' + i, name: 'Name ' + i},
        last: 'Name ' + i,
        handle: 'Handle ' + i
      });
    }
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
          this.reloadData();
        },
        error => {
          console.log(error);
       //   localStorage.setItem('token', "");
      //    this.router.navigate(['auth/signin']);
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