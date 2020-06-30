import { Component, OnInit } from '@angular/core';
import { ReferralAddress } from 'src/app/referral-address';
import { ReferralAddressService } from 'src/app/referral-address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-referral-address',
  templateUrl: './create-referral-address.component.html',
  styleUrls: ['./create-referral-address.component.scss']
})

export class CreateReferralAddressComponent implements OnInit {

  employee: ReferralAddress = new ReferralAddress();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: ReferralAddressService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new ReferralAddress();
  }

  save() {

    //this.employee.userid="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto dirrecion correctamente";
          this.employee= new ReferralAddress();
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

  onSubmit() 
  {

  this.alertDisable = true;
  this.alertDisables = true;

  if(this.employee.referral_address_country =="" ||  this.employee.referral_address_country ==null ){
    this.alertDisable = false;
    this.alertMessage = "Pais incompleto";          
  }

  else if(this.employee.referral_address_direction =="" ||  this.employee.referral_address_direction ==null ){
    this.alertDisable = false;
    this.alertMessage = "Dirección Incompleta";          
  }

  else if(this.employee.referral_address_postal_code == null||  this.employee.referral_address_postal_code ==null ){
    this.alertDisable = false;
    this.alertMessage = "CP Incompleta";          
  }


  else if(this.employee.referral_address_cologne =="" ||  this.employee.referral_address_cologne ==null ){
    this.alertDisable = false;
    this.alertMessage = "Colonia/Mnunicipio Incompleta";          
  }

  else if(this.employee.referral_address_state =="" ||  this.employee.referral_address_state ==null ){
    this.alertDisable = false;
    this.alertMessage = "estado Incompleta";          
  }



  else{
    this.save();    
  }
  }

  gotoList() 
  {
    this.router.navigate(['referral-address-list']);
  }

}