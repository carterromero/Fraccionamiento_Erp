import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/payment';
import { PaytmentService } from 'src/app/paytment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paytment-list',
  templateUrl: './paytment-list.component.html',
  styleUrls: ['./paytment-list.component.scss']
})
export class PaytmentListComponent implements OnInit {

  

  general: Observable<Payment[]>;

  constructor(private generalService: PaytmentService,
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
    this.router.navigate(['payment-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-payment', id]);
  }


}
