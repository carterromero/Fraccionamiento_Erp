import { LinesService } from "../../../../services/gl/lines.service";
import { Lines } from "../../../../services/gl/lines";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-lines',
  templateUrl: './update-lines.component.html',
  styleUrls: ['./update-lines.component.scss']
})
export class UpdateLinesComponent implements OnInit {


  p_id: number;
  employee: Lines;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: LinesService) { }

  ngOnInit() {

    this.employee = new Lines();
    this.p_id = this.route.firstChild.snapshot.params['p_id']
    console.log(this.employee.accounting_accounts_lines_status);
    this.employeeService.getEmployee(this.p_id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.accounting_accounts_lines_status = (String(this.employee.accounting_accounts_lines_status) == "false") ? null:"false";
        console.log(this.employee.accounting_accounts_lines_status);
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
  }

   

  updateEmployee() {
    this.employee.last_updated_by = localStorage.getItem('id');  
    this.employee.user_id="3";
    console.log(this.employee.accounting_accounts_lines_status);
    
    this.employeeService.updateEmployee(this.p_id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.alertDisables = false;
        this.alertMessages ="Se actualizo  correctamente";
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
  
    if(this.employee.accounting_accounts_lines_parent_1 =="" ||  this.employee.accounting_accounts_lines_parent_1 ==null ){
      this.alertDisable = false;
      this.alertMessage = "parent_1 Incompleta ";          
    }
  
    else if(this.employee.accounting_accounts_lines_parent_2 =="" ||  this.employee.accounting_accounts_lines_parent_2 ==null ){
      this.alertDisable = false;
      this.alertMessage = "parent_2 Incompleta";          
    }
    else if(this.employee.accounting_accounts_lines_parent_3 =="" ||  this.employee.accounting_accounts_lines_parent_3 ==null ){
      this.alertDisable = false;
      this.alertMessage = "parent_3 Incompleta";          
    }
    else if(this.employee.accounting_accounts_lines_children =="" ||  this.employee.accounting_accounts_lines_children ==null ){
      this.alertDisable = false;
      this.alertMessage = "lines_children Incompleta ";          
    }
    else if(this.employee.accounting_accounts_lines_description =="" ||  this.employee.accounting_accounts_lines_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "description Incompleta";          
    }
  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['lines-list']);
  }

}
