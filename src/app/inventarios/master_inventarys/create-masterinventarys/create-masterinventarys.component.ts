import { Component, OnInit } from '@angular/core';
import { MasterInventarys } from 'src/app/masterinventarys';
import { Observable } from 'rxjs';
import { MasterInventarysService } from 'src/app/masterinventarys.service';
import { Router } from '@angular/router';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';

@Component({
  selector: 'app-create-masterinventarys',
  templateUrl: './create-masterinventarys.component.html',
  styleUrls: ['./create-masterinventarys.component.scss']
})
export class CreateMasterinventarysComponent implements OnInit {
  employee: MasterInventarys = new MasterInventarys();
  employee1: Condominums = new Condominums();
  submitted = false;
  addresses: Observable<MasterInventarys[]>;
  addresses1: Observable<Condominums[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

    constructor(private employeeService: MasterInventarysService,
    private addressService: MasterInventarysService,
    private address1Service: CondominumsService,
    private router: Router) { }


  ngOnInit() {
    
  }
  reloadDatas() 
  {

    this.address1Service.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.addresses1 = this.address1Service.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      }
    );      
  }

  save()
   {this.employee.last_update_by=3;
    this.employee.condominums_id="1";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto la Sub Categoria correctamente";
          this.employee  = new MasterInventarys();
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
  if(this.employee.master_inventarys_name_inventary =="" ||  this.employee.master_inventarys_name_inventary ==null ){
    this.alertDisable = false;
    this.alertMessage = "Descripción Incompleto";          
  }
  else if(this.employee.master_inventarys_identifier =="" ||  this.employee.master_inventarys_identifier ==null ){
    this.alertDisable = false;
    this.alertMessage = "Sub Categoria Incompleta";          
  }
  else if(this.employee.master_inventarys_location =="" ||  this.employee.master_inventarys_location ==null ){
    this.alertDisable = false;
    this.alertMessage = "Sub Categoria Incompleta";          
  }
  else if(this.employee1.condominums_description =="" ||  this.employee1.condominums_description ==null ){
    this.alertDisable = false;
    this.alertMessage = "Sub Categoria Incompleta";          
  }
  
  else{
    this.save();    
  } 
  }

  gotoList() 
  {
    this.router.navigate(['sub_categories-list']);
  }

}
