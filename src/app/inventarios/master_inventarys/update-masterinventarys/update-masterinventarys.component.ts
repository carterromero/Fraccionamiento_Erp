import { Component, OnInit } from '@angular/core';
import { MasterInventarys } from 'src/app/masterinventarys';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterInventarysService } from 'src/app/masterinventarys.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-masterinventarys',
  templateUrl: './update-masterinventarys.component.html',
  styleUrls: ['./update-masterinventarys.component.scss']
})
export class UpdateMasterinventarysComponent implements OnInit {

  id: number;
  employee: MasterInventarys;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: MasterInventarysService) { }

  ngOnInit() {

    this.employee = new MasterInventarys();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.master_status);
    this.employeeService.getEmployee(this.id, this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.master_status = (String(this.employee.master_status) == "false") ? null:"false";
        console.log(this.employee.master_status);
      }, error => {
        console.log(error);
        
      });
      


  }

   

  updateEmployee() {

    
    
    this.employee.last_update_by=3;
    console.log(this.employee);
    
    console.log(this.id);
    
    
    this.employeeService.updateEmployee(this.id,this.employee)
      .subscribe(data => {console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo la categoria correctamente";
      }, 
      error => {
        console.log(error);
        this.alertDisable = false;
        this.alertMessage = error['statusText'];
        
      });
    
  
  }

  onSubmit() {
    

    this.alertDisable = true;
    this.alertDisables = true;
  
    if(this.employee.master_inventarys_name_inventary =="" ||  this.employee.master_inventarys_name_inventary ==null ){
      this.alertDisable = false;
      this.alertMessage = "El nombre master esta incompleto";          
    }
    else if(this.employee.master_inventarys_identifier =="" ||  this.employee.master_inventarys_identifier ==null ){
      this.alertDisable = false;
      this.alertMessage = "Identificador Incompleta";          
    }
    else if(this.employee.master_inventarys_location =="" ||  this.employee.master_inventarys_location ==null ){
      this.alertDisable = false;
      this.alertMessage = "Localización Incompleta";          
    }
  }

  gotoList() 
  {
    this.router.navigate(['master_inventarys-list']);
  }
}
