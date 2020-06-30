import { Component, OnInit } from '@angular/core';
import { UnitOfMeasures } from 'src/app/unit-of-measures';
import { UnitOfMeasuresService } from 'src/app/unit-of-measures.service ';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-unit-of-measures',
  templateUrl: './update-unit-of-measures.component.html',
  styleUrls: ['./update-unit-of-measures.component.scss']
})
export class UpdateUnitOfMeasuresComponent implements OnInit {

  id: number;
  employee: UnitOfMeasures;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: UnitOfMeasuresService) { }

  ngOnInit() {

    this.employee = new UnitOfMeasures();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.of_measuares_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.of_measuares_status = (String(this.employee.of_measuares_status) == "false") ? null:"false";
        console.log(this.employee.of_measuares_status);
      }, error => {
        console.log(error);
        
      });
      


  }

   

  updateEmployee() {

    
    
    this.employee.last_update_by=3;
    console.log(this.employee);
    
 console.log(this.id);
    
    
    this.employeeService.updateEmployee(this.id, this.employee)
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
  
    if(this.employee.of_measuares_description =="" ||  this.employee.of_measuares_description ==null ){
      this.alertDisable = false;
      this.alertMessage = "La descripción esta incompleto";          
    }
    else{
      this.updateEmployee();    
    }


  }

  gotoList() {
    this.router.navigate(['unitof-measures-list']);
  }

}
