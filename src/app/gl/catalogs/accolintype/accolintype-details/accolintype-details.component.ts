import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccolintypeService } from "../../../../services/gl/accolintype.service";
import { Accolintype } from "../../../../services/gl/accolintype";

@Component({
  selector: 'app-accolintype-details',
  templateUrl: './accolintype-details.component.html',
  styleUrls: ['./accolintype-details.component.scss']
})
export class AccolintypeDetailsComponent implements OnInit {

 
  p_id: number;
  employee: Accolintype;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: AccolintypeService) { }

  ngOnInit() {
    this.employee = new Accolintype();    
    this.p_id = this.route.firstChild.snapshot.params['p_id']
    console.log(this.p_id);
    
    
    this.employeeService.getEmployee(this.p_id)
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


