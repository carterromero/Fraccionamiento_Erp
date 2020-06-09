import { Component, OnInit } from '@angular/core';
import { LegalsService } from 'src/app/legals.service';
import { Router } from '@angular/router';
import { Legals } from 'src/app/legals';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-legals-list',
  templateUrl: './legals-list.component.html',
  styleUrls: ['./legals-list.component.scss']
})
export class LegalsListComponent implements OnInit {

  general: Observable<Legals[]>;

  constructor(private generalService: LegalsService,
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
    this.router.navigate(['legals-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-legals', id]);
  }

}
