import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PurcharseService } from 'src/app/purcharse.service';
import { Purcharse } from 'src/app/purcharse';
import { Tenants } from 'src/app/tenants';
import { TenantsService } from 'src/app/tenants.service';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';

@Component({
  selector: 'app-purcharse-list',
  templateUrl:'./purcharse-list.component.html',
  styleUrls: ['./purcharse-list.component.scss']
})
export class PurcharseListComponent implements OnInit {
  condo: Condominums = new Condominums();
  teha: Tenants = new Tenants(); 
  tha: Observable<Tenants[]>; 
  general: Observable<Purcharse[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  Condo: Observable<Condominums[]>;

  constructor(private generalService: PurcharseService, 
    private thaService :  TenantsService,
    private conService :CondominumsService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  


  
  reloadData() {
    this.condo.condominums_description = localStorage.getItem('condominums');
    this.teha.tenants_name = localStorage.getItem('inquilino');
    this.generalService.getEmployeeList(parseInt(localStorage.getItem('condominums'))).subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeList(1);
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
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="El fraccionamiento se a eliminado correctamente";
        },
        error => {console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        }
      );
  }

  generalDetails(id: number){
    this.router.navigate(['purcharse-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-purcharse', id]);
  }


}
