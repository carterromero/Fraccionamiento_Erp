import { JournalsService } from "../../../../services/gl/journals.service";
import { Journals } from "../../../../services/gl/journals";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-journals',
  templateUrl: './update-journals.component.html',
  styleUrls: ['./update-journals.component.scss']
})
export class UpdateJournalsComponent implements OnInit {

  p_id: number;
  employee: Journals;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: JournalsService) { }

  ngOnInit() {

    this.employee = new Journals();
    this.p_id = this.route.firstChild.snapshot.params['p_id']
    console.log(this.employee.journals_status);
    this.employeeService.getEmployee(this.p_id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.journals_status = (String(this.employee.journals_status) == "false") ? null:"false";
        console.log(this.employee.journals_status);
      }, error => {
        console.log(error);let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
        
      });
  }

   

  updateEmployee() {

    this.employee.user_id="3";
    console.log(this.employee.journals_status);
    
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
  
    if(this.employee.journals_date =="" ||  this.employee.journals_date ==null ){
      this.alertDisable = false;
      this.alertMessage = "fecha incompleta ";          
    }
  
    else if(this.employee.journals_description =="" ||  this.employee.journals_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "descripcion Incompleta";          
    }
    else if(this.employee.journals_currency_code =="" ||  this.employee.journals_currency_code ==null ){
      this.alertDisable = false;
      this.alertMessage = "codigo moneda Incompleta";          
    }
  
  
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['journals-list']);
  }

}
