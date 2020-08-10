import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageBanksService } from '../../../manage-banks.service';
import { ManageBanks } from '../../../manageBank';


@Component({
  selector: 'app-update-manage-banks',
  templateUrl: './update-manage-banks.component.html',
  styleUrls: ['./update-manage-banks.component.scss']
})
export class UpdateManageBanksComponent implements OnInit {

  id: number;
  employee: ManageBanks;
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: ManageBanksService) { }

  ngOnInit() {
    this.employee = new ManageBanks();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.mab_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.mab_status = (String(this.employee.mab_status) == "false") ? null:"false";
        console.log(this.employee.mab_status);
      }, error => {
        console.log(error);
      });
  }

  
  updateEmployee() {

    //this.employee.userid="3";
    console.log(this.employee.manage_banks_status);
    
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
    this.router.navigate(['manage-banks-list']);
  }


}
