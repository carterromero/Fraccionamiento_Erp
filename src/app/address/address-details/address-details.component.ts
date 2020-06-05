import { Component, OnInit } from '@angular/core';
import { AddressService } from "../../address.service";
import { Address } from "../../address";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {

  id: number;
  address: Address;

  constructor(private route: ActivatedRoute, private router: Router, private addressService: AddressService) { }

  ngOnInit() {

    this.address = new Address();
    //this.id = this.route.snapshot.params['id'];
    this.id = this.route.firstChild.snapshot.params['id'];
    console.log(this.id);

    this.addressService.getAddress(this.id)
      .subscribe(data => {
        console.log(data);
        this.address = data;
      }, error => {console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']); 
      });    
  }
}