import { Component, OnInit } from '@angular/core';
import { Configmainte } from 'src/app/configmainte';
import { ConfigmainteService } from 'src/app/configmainte.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-mainte-list',
  templateUrl: './config-mainte-list.component.html',
  styleUrls: ['./config-mainte-list.component.scss']
})
export class ConfigMainteListComponent implements OnInit {

  general: Observable<Configmainte[]>;

  constructor(private generalService: ConfigmainteService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });
  }

  deleteGeneral(id: number) {
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']); 
        }
      );
  }

  generalDetails(id: number){
    this.router.navigate(['details-payroll', id]);
  }

  generalUpdate(id: number){
    this.router.navigate(['Update-payroll', id]);
  }


}
