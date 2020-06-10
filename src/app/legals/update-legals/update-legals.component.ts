import { Component, OnInit } from '@angular/core';
import { Legals } from 'src/app/services/admin/legals';
import { ActivatedRoute, Router } from '@angular/router';
import { LegalsService } from 'src/app/services/admin/legals.service';


@Component({
  selector: 'app-update-legals',
  templateUrl: './update-legals.component.html',
  styleUrls: ['./update-legals.component.scss']
})
export class UpdateLegalsComponent implements OnInit {

  id: number;
  employee: Legals;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: LegalsService) { }

  ngOnInit() {

    this.employee = new Legals();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.legals_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.legals_status = (String(this.employee.legals_status) == "false") ? null:"false";
        console.log(this.employee.legals_status);
      }, error => {
        console.log(error);
        
      });
      


  }

   

  updateEmployee() {

    

    this.employee.userid="3";
    console.log(this.employee.legals_status);
    

    
    
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
    this.router.navigate(['legals-list']);
  }

}
