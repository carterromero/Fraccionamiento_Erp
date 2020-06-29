import { Component, OnInit } from '@angular/core';
import { UnitOfMeasures } from 'src/app/unit-of-measures';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitOfMeasuresService } from 'src/app/unit-of-measures.service ';

@Component({
  selector: 'app-unit-of-measures-details',
  templateUrl: './unit-of-measures-details.component.html',
  styleUrls: ['./unit-of-measures-details.component.scss']
})
export class UnitOfMeasuresDetailsComponent implements OnInit {

  id: number;
  employee: UnitOfMeasures;
  alertDisable = true;
  alertMessage = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: UnitOfMeasuresService) { }

 ngOnInit() {
    this.employee = new UnitOfMeasures();    
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
