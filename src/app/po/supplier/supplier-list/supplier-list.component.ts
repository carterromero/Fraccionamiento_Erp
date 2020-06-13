import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/supplier';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';
import { Legals } from 'src/app/services/admin/legals';
import { LegalsService } from 'src/app/services/admin/legals.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  general: Observable<Supplier[]>;

  constructor(private generalService: SupplierService,
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
    this.router.navigate(['supplier-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-supplier', id]);
  }

}
