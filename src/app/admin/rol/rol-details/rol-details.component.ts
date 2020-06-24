import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/services/admin/rol';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from 'src/app/services/admin/rol.service';

@Component({
  selector: 'app-rol-details',
  templateUrl: './rol-details.component.html',
  styleUrls: ['./rol-details.component.scss']
})
export class RolDetailsComponent implements OnInit {

  id: number;
  employee: Rol;  
  alertDisable = true;
  alertMessage = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: RolService ) { }

  ngOnInit() {
    this.employee = new Rol();    
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
