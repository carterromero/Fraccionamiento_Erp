import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SupplierService } from 'src/app/supplier.service';
import { Supplier } from 'src/app/supplier';
import * as jsPDF from 'jspdf'
import { FilterS } from 'src/app/filters';

@Component({
  selector: 'app-pdf-supplier-list',
  templateUrl: './pdf-supplier-list.component.html',
  styleUrls: ['./pdf-supplier-list.component.scss']
})
export class PdfSupplierListComponent implements OnInit {

  id: number;
  employee: Supplier;
  filter :FilterS= new FilterS();
  

  


  general: Observable<Supplier[]>;
  filterss: Observable<FilterS[]>;

  constructor(  private route: ActivatedRoute,
    private generalService: 
    SupplierService, private router: Router) { }
   
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
  reloadDatas() {
    
    this.generalService.createFilter(this.filter).subscribe(
      data => {
        console.log(data);
        this.general =this.generalService.createFilter(this.filter);
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });

      
  }

  onSubmit() 
  {
    
    this.getsbusqueda();
  }

  getsbusqueda()
  {
    if(this.filter.create_date !=null || this.filter.supplier_status !=null){
    this.reloadDatas();
    console.log(this.filter);
  }
  else{
    alert("Ingrese Fecha para buscar y el estatus");
  }
   
  }



  generalDetails(id: number){
    this.router.navigate(['pdf-supplier-repor-details', id]);
  }

}
