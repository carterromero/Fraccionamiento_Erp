import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AgreementService } from "src/app/agreements.service";
import { Agreements } from "src/app/agreements";
import { Router } from '@angular/router';

@Component({
  selector: "app-agreements-list",
  templateUrl: "./agreements-list.component.html",
  styleUrls: ["./agreements-list.component.scss"]
})
export class AgreementsListComponent implements OnInit {
  agreements: Observable<Agreements[]>;
  elements: any = [];

  constructor(private agreementService: AgreementService,
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
    this.agreementService.getAgreementList().subscribe(
      data => {
        console.log(data);
        this.agreements = this.agreementService.getAgreementList();
      },
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
       // this.router.navigate(['auth/signin']);     
      });
  }

  deleteAgreement(id: number) {
    this.agreementService.deleteAgreement(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {
          console.log(error);
         // localStorage.setItem('token', "");
         // this.router.navigate(['auth/signin']);
        });
  }

  agreementDetails(id: number){
    console.log(id);
    this.router.navigate(['agreements-details', id]);
  }

  updateAgreement(id: number){
    console.log(id);
    this.router.navigate(['update-agreements', id]);
  }
}