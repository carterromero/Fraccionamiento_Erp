import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.scss']
})
export class SupplierDetailsComponent implements OnInit {
  id: number;
  employee: Supplier;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: SupplierService) { }

  ngOnInit() {
    this.employee = new Supplier();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });


  }
 
  

}
