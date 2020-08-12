import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PurcharseService } from 'src/app/purcharse.service';
import { Purcharse } from 'src/app/purcharse';
import { Tenants } from 'src/app/tenants';
import { TenantsService } from 'src/app/tenants.service';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { User } from 'src/app/services/admin/user';


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
  generals: Purcharse = new Purcharse();
  gen: Purcharse;
  id: number;
  p_id : number;
  user: User = new User();
  userss: Observable<User[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  Condo: Observable<Condominums[]>;

  constructor(private generalService: PurcharseService, 
    private thaService :  TenantsService,
    private conService :CondominumsService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
      
      this.reloadData();
      this.users();
      //console.log(this.updateEmployee(this.id));
  }


  users() 
  {
    this.user.user_name = localStorage.getItem('name');
  
    this.generalService.getOneUser(this.id).subscribe(
      data => {
        console.log(data);
        this.userss = this.generalService.getOneUser(this.id);
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );      
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
       
          this.alertDisable = false;
          this.alertMessage = error['statusText'];     
        }
      });

      
  }

 /* deleteGeneral(id: number) {
    this.generalService.updateStatusPurchar(this.id, this.general)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages =" se cancelo correctamente";
        },
        error => {console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        }
      );
  }*/




  updateEmployee(id: number) {

    //this.gen.id_status_purcharse=4;
    this.generalService.updateStatusPurchar(id, this.gen)
    .subscribe(
      data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Actualizado";
        this.gotoList();  
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


  gotoList() {
    this.router.navigate(['purchase_orders-list']);
  }

  /*deleteGeneral(id: number) 
  {

   
    console.log(this.generals)
    this.gen.id_status_purcharse="4"
    this.generalService.updateStatusPurchar(this.id, this.gen)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se Cancelo Correctamente";  
      }, 
      error => 
      {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }

*/
  generalDetails(id: number){
    this.router.navigate(['purcharse-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-purcharse', id]);
  }


}
