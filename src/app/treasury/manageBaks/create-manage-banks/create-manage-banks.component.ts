import { Component, OnInit } from '@angular/core';
import { ManageBanks } from '../../../manageBank';
import { Router } from '@angular/router';
import { ManageBanksService } from '../../../manage-banks.service';


@Component({
  selector: 'app-create-manage-banks',
  templateUrl: './create-manage-banks.component.html',
  styleUrls: ['./create-manage-banks.component.scss']
})
export class CreateManageBanksComponent implements OnInit {

  employee: ManageBanks = new ManageBanks();
  submitted = false;

  constructor(private employeeService: ManageBanksService,
    private router: Router) { }

  ngOnInit() {
    //code
 
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new ManageBanks();
  }

  
  save() {

    this.employee.created_by= Number(localStorage.getItem('id'));
    this.employee.created_by = Number(localStorage.getItem('id'));

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
    this.router.navigate(['manage-banks-list']);
  }

}
