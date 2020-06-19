import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransfersService } from '../../../transfers.service';
import { Transfers } from '../../../transfers';

@Component({
  selector: 'app-update-transfers',
  templateUrl: './update-transfers.component.html',
  styleUrls: ['./update-transfers.component.scss']
})
export class UpdateTransfersComponent implements OnInit {

  id: number;
  employee: Transfers;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: TransfersService) { }

  ngOnInit() {

    this.employee = new Transfers();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.transfers_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.transfers_status = (String(this.employee.transfers_status) == "false") ? null:"false";
        console.log(this.employee.transfers_status);
      }, error => {
        console.log(error);
      });
  }

   

  updateEmployee() {

    //this.employee.userid="3";
    console.log(this.employee.transfers_status);
    
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
    this.router.navigate(['transfers-list']);
  }


}
