import { Component, OnInit } from '@angular/core';
import { PaymentTermsService } from 'src/app/payment-terms.service';
import { Router } from '@angular/router';
import { PaymentTerms } from 'src/app/payment-terms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment-terms-list',
  templateUrl: './payment-terms-list.component.html',
  styleUrls: ['./payment-terms-list.component.scss']
})
export class PaymentTermsListComponent implements OnInit {

  general: Observable<PaymentTerms[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: PaymentTermsService,
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
          this.alertMessages ="el Termino se a eliminado correctamente";
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

  generalDetails(id: number){
    this.router.navigate(['payment-terms-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-payment-terms', id]);
  }

}
