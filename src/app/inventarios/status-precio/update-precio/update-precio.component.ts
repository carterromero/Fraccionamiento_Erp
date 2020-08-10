import { Component, OnInit } from '@angular/core';
import { Pricearticulo } from 'src/app/pricearticles';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusService } from 'src/app/status.service';
import { PrecioarticuloService } from 'src/app/precioarticulo.service';

@Component({
  selector: 'app-update-precio',
  templateUrl: './update-precio.component.html',
  styleUrls: ['./update-precio.component.scss']
})
export class UpdatePrecioComponent implements OnInit {

 
  id: number;
  employee: Pricearticulo;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: PrecioarticuloService) { }

  ngOnInit() {

    this.employee = new Pricearticulo();
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.employee.price_status);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
        this.employee.price_status = (String(this.employee.price_status) == "false") ? null:"false";
        console.log(this.employee.price_status);
      }, error => {
        console.log(error);
      });
  }

   

  updateEmployee() {

    
    console.log(this.employee.price_status);
    
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {console.log(data);
        this.gotoList();  
      }, 
      error => {
        console.log(error);
        
      });
    
  
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['status-precios-list']);
  }
}
