import { Component, OnInit } from '@angular/core';
import { ReferralAddressService } from 'src/app/referral-address.service';
import { Router } from '@angular/router';
import { ReferralAddress } from 'src/app/referral-address';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-referral-address-list',
  templateUrl: './referral-address-list.component.html',
  styleUrls: ['./referral-address-list.component.scss']
})
export class ReferralAddressListComponent implements OnInit {

  general: Observable<ReferralAddress[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: ReferralAddressService,
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
          this.alertMessages ="la Remision se a eliminado correctamente";
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
    this.router.navigate(['referral-address-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-referral-address', id]);
  }

}
