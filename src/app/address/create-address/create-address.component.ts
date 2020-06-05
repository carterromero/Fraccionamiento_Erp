import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../address.service';
import { Address } from '../../address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit {
  
  address: Address = new Address();
  submitted = false;

  constructor(private addressService: AddressService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newAddress(): void {
    this.submitted = false;
    this.address = new Address();
  }

  save() {
    this.addressService.createAddress(this.address)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });
    this.address = new Address();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['address-list']);
  }
}