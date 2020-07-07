import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pricearticulo } from 'src/app/pricearticles';
import { Router } from '@angular/router';
import { PrecioarticuloService } from 'src/app/precioarticulo.service';

@Component({
  selector: 'app-status-precioarticulo-list',
  templateUrl: './status-precioarticulo-list.component.html',
  styleUrls: ['./status-precioarticulo-list.component.scss']
})
export class StatusPrecioarticuloListComponent implements OnInit {

  general: Observable<  Pricearticulo[]>;

  constructor(private generalService: PrecioarticuloService,
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
    this.router.navigate(['status-details',id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-status', id]);
  }


}
