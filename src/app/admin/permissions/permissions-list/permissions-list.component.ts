import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Permissions } from 'src/app/services/admin/permissions';
import { PermissionsService } from 'src/app/services/admin/permissions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permissions-list',
  templateUrl: './permissions-list.component.html',
  styleUrls: ['./permissions-list.component.scss']
})
export class PermissionsListComponent implements OnInit {

  general: Observable<Permissions[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: PermissionsService,
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }
  
  reloadData() {
    
    this.generalService.getEmployeeList().subscribe(
      data => {
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

  deleteGeneral(id: number) {
    this.alertDisable = true;
    this.alertDisables = true;
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="El permiso se a eliminado correctamente";
        },
        error => {
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }  
        }
      );
  }

  generalDetails(id: number){
    this.router.navigate(['permissions-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-permissions', id]);
  }

}
