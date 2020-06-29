import { Component, OnInit } from '@angular/core';
import { ReferralAddress } from 'src/app/referral-address';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferralAddressService } from 'src/app/referral-address.service';


@Component({
  selector: 'app-update-referral-address',
  templateUrl: './update-referral-address.component.html',
  styleUrls: ['./update-referral-address.component.scss']
})
export class UpdateReferralAddressComponent implements OnInit {

  id: number;
  employee: ReferralAddress;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: ReferralAddressService) { }

  ngOnInit() {

    this.employee = new ReferralAddress();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.referral_address_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.referral_address_status = (String(this.employee.referral_address_status) == "false") ? null:"false";
        console.log(this.employee.referral_address_status);
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
  }

   

  updateEmployee() {

    //this.employee.userid="3";
    console.log(this.employee.referral_address_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la Remision correctamente";
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

  onSubmit() {
    

    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.referral_address_country =="" ||  this.employee.referral_address_country ==null ){
      this.alertDisable = false;
      this.alertMessage = "Pais Incompleto";          
    }
  
    else if(this.employee.referral_address_direction =="" ||  this.employee.referral_address_direction ==null ){
      this.alertDisable = false;
      this.alertMessage = "Dirección Incompleta";          
    }
  
    else if(this.employee.referral_address_postal_code ==null ||  this.employee.referral_address_postal_code ==null ){
      this.alertDisable = false;
      this.alertMessage = "Codigo Postal Incompleta";          
    }
  
  
    else if(this.employee.referral_address_cologne =="" ||  this.employee.referral_address_cologne ==null ){
      this.alertDisable = false;
      this.alertMessage = "Colonia/Municipio Incompleta";          
    }
  
    else if(this.employee.referral_address_state =="" ||  this.employee.referral_address_state ==null ){
      this.alertDisable = false;
      this.alertMessage = "Estado Incompleta";          
    }
  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['referral-address-list']);
  }

}
