import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Billtopay } from 'src/app/billtopay';
import { Billtopayservice } from 'src/app/billtopay.service';
import { Router } from '@angular/router';
import { User } from 'src/app/services/admin/user';

@Component({
  selector: 'app-facpv-list',
  templateUrl: './facpv-list.component.html',
  styleUrls: ['./facpv-list.component.scss']
})
export class FacpvListComponent implements OnInit {
  id: number;
  user: User = new User();
  userss: Observable<User[]>;
  general: Observable<Billtopay[]>;
  
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: Billtopayservice,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
      this.users()
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeList();
      },
      error => {
        console.log(error);   
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });

      
  }



  users() 
  {
    this.user.user_name = localStorage.getItem('name');
  
    this.generalService.getOneUser(this.id).subscribe(
      data => {
        console.log(data);
        this.userss = this.generalService.getOneUser(this.id);
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }
 

  deleteGeneral(id: number) {
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages =" se a eliminado correctamente";
        },
        error => {console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        }
      );
  }

  generalDetails(id: number){
    this.router.navigate(['billtopay-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-billtopay', id]);
  }


}

