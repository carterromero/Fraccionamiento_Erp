import { Component, OnInit } from '@angular/core';
import { CreditorService } from 'src/app/creditor.service';
import { Creditor } from 'src/app/creditor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-creditor',
  templateUrl: './update-creditor.component.html',
  styleUrls: ['./update-creditor.component.scss']
})
export class UpdateCreditorComponent implements OnInit {

  id: number;
  employee: Creditor;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CreditorService) { }

  ngOnInit() {

    this.employee = new Creditor();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.creditor_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.creditor_status = (String(this.employee.creditor_status) == "false") ? null:"false";
        console.log(this.employee.creditor_status);
      }, error => {
        console.log(error);
      });
  }

   

  updateEmployee() {

    

    console.log(this.employee.creditor_status);
    

    
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {console.log(data);
        this.gotoList();  
      }, 
      error => {
        console.log(error);
        
      });
    
  
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['creditor-list']);
  }

}
