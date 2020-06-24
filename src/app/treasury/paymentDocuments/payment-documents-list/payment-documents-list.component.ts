import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentDocuments } from '../../../paymentDocuments';
import { Router } from '@angular/router';
import { PaymentDocumentsService } from '../../../payment-documents.service';

@Component({
  selector: 'app-payment-documents-list',
  templateUrl: './payment-documents-list.component.html',
  styleUrls: ['./payment-documents-list.component.scss']
})
export class PaymentDocumentsListComponent implements OnInit {

  general: Observable<PaymentDocuments[]>;

  constructor(private generalService: PaymentDocumentsService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });

      
  }

  deleteGeneral(id: number) {
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']); 
        }
      );
  }

  generalDetails(id: number){
    this.router.navigate(['payment-documents-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-payment-documents', id]);
  }

}
