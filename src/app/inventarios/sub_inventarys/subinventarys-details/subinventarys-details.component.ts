import { Component, OnInit } from '@angular/core';
import { SubInventarys } from 'src/app/subinventarys';
import { Router, ActivatedRoute } from '@angular/router';
import { SubInventarysService } from 'src/app/subinventarys.service';

@Component({
  selector: 'app-subinventarys-details',
  templateUrl: './subinventarys-details.component.html',
  styleUrls: ['./subinventarys-details.component.scss']
})
export class SubinventarysDetailsComponent implements OnInit {

  id: number;
  employee: SubInventarys;
  alertDisable = true;
  alertMessage = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: SubInventarysService) { }

 ngOnInit() {
    this.employee = new SubInventarys();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }

}
