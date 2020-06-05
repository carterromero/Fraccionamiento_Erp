import { Component, OnInit } from '@angular/core';
import { AddressService } from "../../address.service";
import { Address } from "../../address";
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

  addresses: Observable<Address[]>;

  constructor(private addressService: AddressService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.addressService.getAddressList().subscribe(
      data => {
        console.log(data);
        this.addresses = this.addressService.getAddressList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });
  }

  deleteAddress(id: number) {
    this.addressService.deleteAddress(id)
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

  addressDetails(id: number){
    this.router.navigate(['address-details', id]);
  }

  updateAddress(id: number){
    this.router.navigate(['update-address', id]);
  }

}
