import { Component, OnInit } from '@angular/core';
import { Condominums } from 'src/app/services/admin/condominums';
import { ActivatedRoute, Router } from '@angular/router';
import { CondominumsService } from 'src/app/services/admin/condominums.service';
import { LegalsService } from 'src/app/services/admin/legals.service';
import { Observable } from 'rxjs';
import { Legals } from 'src/app/services/admin/legals';

@Component({
  selector: 'app-update-condominums',
  templateUrl: './update-condominums.component.html',
  styleUrls: ['./update-condominums.component.scss']
})
export class UpdateCondominumsComponent implements OnInit {

  id: number;
  employee: Condominums;
  addresses: Observable<Legals[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CondominumsService ,
    private addressService: LegalsService
    
    ) { }

  ngOnInit() {

    this.employee = new Condominums();
    this.id = this.route.firstChild.snapshot.params['id']
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => 
        {
        console.log(data);
        this.employee = data;
        this.employee.condominums_status = (String(this.employee.condominums_status) == "false") ? null:"true";
        console.log(this.employee.condominums_status);
        },
       error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }

      });
      this.reloadDatas() ;
  }

   

  updateEmployee() 
  {

    this.employee.user_id="3";
    console.log(this.employee)
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo el fraccionamiento correctamente";  
        this.gotoList();
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

  onSubmit() {
    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.condominums_description =="" ||  this.employee.condominums_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "El Atributo descripción es Obligatorio";          
    }
  
    else if(this.employee.legals_id =="" ||  this.employee.legals_id ==null ){
      this.alertDisable = false;
      this.alertMessage = "El Atributo empresa es Obligatorio";          
    }
  
    else{
      this.updateEmployee();    
    }
  }

  gotoList() {
    this.router.navigate(['condominus-list']);
  }

}
