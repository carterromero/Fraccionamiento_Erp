import { Component, OnInit } from '@angular/core';
import { Pricearticulo } from 'src/app/pricearticles';
import { ActivatedRoute, Router } from '@angular/router';
import { PrecioarticuloService } from 'src/app/precioarticulo.service';

@Component({
  selector: 'app-precio-details',
  templateUrl: './precio-details.component.html',
  styleUrls: ['./precio-details.component.scss']
})
export class PrecioDetailsComponent implements OnInit {
  id: number;
  employee: Pricearticulo;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PrecioarticuloService) { }



   

  ngOnInit() {
    this.employee = new Pricearticulo();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });

    }
  
}
