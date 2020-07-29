import { Component, OnInit } from '@angular/core';
import { Condominums } from 'src/app/services/admin/condominums';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { Router } from '@angular/router';
import { Legals } from 'src/app/services/admin/legals';
import { Observable } from 'rxjs';
import { LegalsService } from 'src/app/services/admin/legals.service';

@Component({
  selector: 'app-create-condominums',
  templateUrl: './create-condominums.component.html',
  styleUrls: ['./create-condominums.component.scss']
})
export class CreateCondominumsComponent implements OnInit {

  employee: Condominums = new Condominums();
  submitted = false;
  addresses: Observable<Legals[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private employeeService: CondominumsService,
    private addressService: LegalsService,
    private router: Router) { }


  ngOnInit() {
    this.reloadDatas();
  }

  reloadDatas() 
  {

    this.addressService.getEmployeeListcombo().subscribe(
      data => {
        console.log(data);
        this.addresses = this.addressService.getEmployeeListcombo();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }

  save()
   {
    this.employee.user_id="3";
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto el fraccionamiento correctamente";
          this.employee  = new Condominums();
        }, 
      error => {
        console.log(error);  
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = "Fraccionamiento duplicado, no se puede agregar";          
        }    
      });
  }

  onSubmit() 
      {
            this.alertDisable = true;
            this.alertDisables = true;
        if(this.employee.condominums_description =="" ||  this.employee.condominums_description ==null ){
            this.alertDisable = false;
            this.alertMessage = "El Atributo Descripción es Obligatorio";          
        }
        else if(this.employee.legals_id =="" ||  this.employee.legals_id ==null ){
            this.alertDisable = false;
            this.alertMessage = "El Atributo empresa es Obligatorio";          
        }
        else{
           this.save();    
        } 
  }

  gotoList() 
  {
    this.router.navigate(['condominus-list']);
  }

}
