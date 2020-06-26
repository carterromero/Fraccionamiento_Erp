import { Component, OnInit } from '@angular/core';
import { ReferralAddress } from 'src/app/referral-address';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferralAddressService } from 'src/app/referral-address.service';

@Component({
  selector: 'app-referral-address-details',
  templateUrl: './referral-address-details.component.html',
  styleUrls: ['./referral-address-details.component.scss']
})
export class ReferralAddressDetailsComponent implements OnInit {

  id: number;
  employee: ReferralAddress;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: ReferralAddressService) { }

  ngOnInit() {
    this.employee = new ReferralAddress();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }
}
