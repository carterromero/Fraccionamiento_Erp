import { Component, OnInit } from '@angular/core';
import { PaymentsARService } from 'src/app/payments-ar.service';
import { Router } from '@angular/router';
import { PaymentsAR } from 'src/app/payments-ar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payments-ar-list',
  templateUrl: './payments-ar-list.component.html',
  styleUrls: ['./payments-ar-list.component.scss']
})
export class PaymentsARListComponent implements OnInit {

  general: Observable<PaymentsAR[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: PaymentsARService,
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
          this.alertMessages ="La Pago se a eliminado correctamente";
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
    this.router.navigate(['payments-ar-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-payments-ar', id]);
  }

}
