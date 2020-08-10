import { Component, OnInit } from '@angular/core';
import { SubInventarys } from 'src/app/subinventarys';
import { Router, ActivatedRoute } from '@angular/router';
import { SubInventarysService } from 'src/app/subinventarys.service';
import { MasterInventarys } from 'src/app/masterinventarys';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-subinventarys',
  templateUrl: './update-subinventarys.component.html',
  styleUrls: ['./update-subinventarys.component.scss']
})
export class UpdateSubinventarysComponent implements OnInit {
  id: number;
  employee: SubInventarys;
  master: Observable<MasterInventarys[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: SubInventarysService) { }

  ngOnInit() {

    this.employee = new SubInventarys();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.sub_inventarys_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.sub_inventarys_status = (String(this.employee.sub_inventarys_status) == "false") ? null:"false";
        console.log(this.employee.sub_inventarys_status);
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
  
      this.reloadDatas() ;
    }




  reloadDatas() 
  {

    this.employeeService.getEmployeeLisMaster(1).subscribe(
      data => {
        console.log(data);
        this.master = this.employeeService.getEmployeeLisMaster(1);
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
  

   

  updateEmployee() {

    this.employee.last_update_by=3;
    console.log(this.employee.sub_inventarys_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la empresa correctamente";
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

  onSubmit() {
    

    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.sub_inventarys_description =="" ||  this.employee.sub_inventarys_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "Nombre Incompleto";          
    }
  

  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['legals-list']);
  }
}
