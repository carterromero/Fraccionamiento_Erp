import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../address.service';
import { Address } from '../../address';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent implements OnInit {

  id: number;
  address: Address;

  constructor(private route: ActivatedRoute,private router: Router,
    private addressService: AddressService) { }

  ngOnInit() {
    this.address = new Address();

    //this.id = this.route.snapshot.params['id'];
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    this.addressService.getAddress(this.id)
      .subscribe(data => {
        console.log(data)
        this.address = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });
  }

  updateAddress() {
    this.addressService.updateAddress(this.id, this.address)
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
    this.updateAddress();    
  }

  gotoList() {
    this.router.navigate(['address-list']);
  }
}