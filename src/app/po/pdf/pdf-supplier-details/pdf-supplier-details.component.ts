import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-pdf-supplier-details',
  templateUrl: './pdf-supplier-details.component.html',
  styleUrls: ['./pdf-supplier-details.component.scss']
})
export class PdfSupplierDetailsComponent implements OnInit {

  id: number;
  employees: Supplier;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: SupplierService) { }


    imprimirLista(id:number){

      const doc = new jsPDF(id);
      
      doc.fromHTML(document.getElementById('from-informacion'), 10,10);;
      doc.save(['lista']);
      
      console.log(id);
  
      }
   

  ngOnInit() {
    this.employees = new Supplier();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employees = data;
      }, error => {
        console.log(error);
      
      });


  
      


     

  }
 
  




}
