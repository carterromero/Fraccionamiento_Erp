import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  general: Observable<Customer[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData() {

    this.generalService.getEmployeeList().subscribe(
      data => {
        this.general = this.generalService.getEmployeeList();
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

  deleteGeneral(id: number) {
    this.alertDisable = true;
    this.alertDisables = true;
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages = "El cliente/residente se a eliminado correctamente";
        },
        error => {
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];
          }
        }
      );
  }

  generalDetails(id: number) {
    this.router.navigate(['customer-details', id]);
  }

  updateGeneral(id: number) {
    console.log("update")
    this.router.navigate(['update-customer', id]);
  }

}
