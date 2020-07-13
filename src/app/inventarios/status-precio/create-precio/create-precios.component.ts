import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pricearticulo } from 'src/app/pricearticles';
import { PrecioarticuloService } from 'src/app/precioarticulo.service';

@Component({
  selector: 'app-create-paytment',
  templateUrl: './create-precios.component.html',
  styleUrls: ['./create-precios.component.scss']
})
export class CreatePreciosComponent implements OnInit {
employee: Pricearticulo = new Pricearticulo();
  submitted = false;

  constructor(private employeeService: PrecioarticuloService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Pricearticulo();
  }

  save() {

    //this.employee.userid="3";


    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.gotoList();    
        }, 
      error => {
        console.log(error);    
      });

  }

  onSubmit() 
  {
    this.submitted = true;
    this.save();    
  }

  gotoList() 
  {
    this.router.navigate(['status-precios-list']);
  }

}
