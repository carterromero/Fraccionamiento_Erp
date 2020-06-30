import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';
import * as jsPDF from 'jspdf'
import { Supplier } from 'src/app/supplier';

@Component({
  selector: 'app-pdf-supplier-list',
  templateUrl: './pdf-supplier-list.component.html',
  styleUrls: ['./pdf-supplier-list.component.scss']
})
export class PdfSupplierListComponent implements OnInit {

  id: number;
  employee: Supplier;
  

  


  general: Observable<Supplier[]>;

  constructor(  private route: ActivatedRoute,private generalService: SupplierService, private router: Router) { }
    imprimirLista(id:number){
      
      
      const doc = new jsPDF(id);
      
      doc.fromHTML(document.getElementById('from-informacion'), 10,10);;
      doc.save(['lista']);
      
      console.log(id);
  
      }



      ngOnInit() :void{
        this.employee = new Supplier();    
        this.id = this.route.firstChild.snapshot.params['id']
        console.log(this.id);
        this.reloadData();
        this.generalService. getEmployeeListReport(this.id)
          .subscribe(data => {
            console.log(data);
            this.employee = data;
          }, error => {
            console.log(error);
            //localStorage.setItem('token', "");
            //this.router.navigate(['auth/signin']);
          });
    
    
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


  generalDetails(id: number){
    this.router.navigate(['pdf-supplier-repor-details', id]);
  }

}
