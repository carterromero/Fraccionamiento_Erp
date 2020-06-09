import { Component, OnInit } from '@angular/core';
import { CreditorService } from 'src/app/creditor.service';
import { Router } from '@angular/router';
import { Creditor } from 'src/app/creditor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-creditor-list',
  templateUrl: './creditor-list.component.html',
  styleUrls: ['./creditor-list.component.scss']
})
export class CreditorListComponent implements OnInit {


  general: Observable<Creditor[]>;

  constructor(private generalService: CreditorService,
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

 // deleteGeneral(id: number) {
  //  this.generalService.deleteEmployee(id)
   //   .subscribe(
   //     data => {
  //        console.log(data);
    //      this.reloadData();
  //      },
  //      error => {console.log(error);
  //      //localStorage.setItem('token', "");
   //     //this.router.navigate(['login']); 
   //     }
    //  );
  //}

  generalDetails(id: number){
    this.router.navigate(['general-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-general', id]);
  }

}
