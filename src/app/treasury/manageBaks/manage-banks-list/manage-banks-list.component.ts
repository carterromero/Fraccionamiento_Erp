import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ManageBanks } from '../../../manageBank';
import { Router } from '@angular/router';
import { ManageBanksService } from '../../../manage-banks.service';

@Component({
  selector: 'app-manage-banks-list',
  templateUrl: './manage-banks-list.component.html',
  styleUrls: ['./manage-banks-list.component.scss']
})
export class ManageBanksListComponent implements OnInit {

  general: Observable<ManageBanks[]>;

  constructor(private generalService: ManageBanksService,
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
    this.router.navigate(['manage-banks-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-manage-banks', id]);
  }

}
