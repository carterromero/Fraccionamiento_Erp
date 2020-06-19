import { Component, OnInit } from '@angular/core';
import { Transfers } from '../../../transfers';
import { Router } from '@angular/router';
import { TransfersService } from '../../../transfers.service';

@Component({
  selector: 'app-create-transfers',
  templateUrl: './create-transfers.component.html',
  styleUrls: ['./create-transfers.component.scss']
})
export class CreateTransfersComponent implements OnInit {

  employee: Transfers = new Transfers();
  submitted = false;

  constructor(private employeeService: TransfersService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Transfers();
  }

  save() {

    //this.employee.userid="3";


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
    this.router.navigate(['transfers-list']);
  }

}
