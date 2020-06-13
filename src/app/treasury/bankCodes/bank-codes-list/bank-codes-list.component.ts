import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BankCodes } from '../../../bankCodes';
import { Router } from '@angular/router';
import { BankCodesService } from '../../../bank-codes.service';

@Component({
  selector: 'app-bank-codes-list',
  templateUrl: './bank-codes-list.component.html',
  styleUrls: ['./bank-codes-list.component.scss']
})
export class BankCodesListComponent implements OnInit {

  general: Observable<BankCodes[]>;

  constructor(private generalService: BankCodesService,
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
    this.router.navigate(['bank-codes-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-bank-codes', id]);
  }

}
