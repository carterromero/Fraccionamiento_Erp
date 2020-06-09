import { Component, OnInit } from '@angular/core';
import { Creditor } from 'src/app/creditor';
import { CreditorService } from 'src/app/creditor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-creditor',
  templateUrl: './create-creditor.component.html',
  styleUrls: ['./create-creditor.component.scss']
})
export class CreateCreditorComponent implements OnInit {

  employee: Creditor = new Creditor();
  submitted = false;

  constructor(private employeeService: CreditorService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Creditor();
  }

  save() {

    this.employee.user_id="3" 



    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.gotoList();    
        }, 
      error => {
        console.log(error);    
      });

  }

  onSubmit() 
  {
    this.submitted = true;
    this.save();    
  }

  gotoList() 
  {
    this.router.navigate(['creditor-list']);
  }

}