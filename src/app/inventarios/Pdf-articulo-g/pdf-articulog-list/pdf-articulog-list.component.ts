import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/articles';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/articles.service';
import * as jsPDF from 'jspdf'
import { TransactionsEntrys } from 'src/app/transactionsentrys';
import { TransactionsEntrysService } from 'src/app/transactionsentrys.service';
import { SubInventarys } from 'src/app/subinventarys';
import { SubInventarysService } from 'src/app/subinventarys.service';
import { SubCategories } from 'src/app/subcategories';
import { SubCategoriesService } from 'src/app/subcategories.service';
import { Categories } from 'src/app/categories';
import { CategoriesService } from 'src/app/categories.service';
import { Pricearticulo } from 'src/app/pricearticles';
import { PrecioarticuloService } from 'src/app/precioarticulo.service';
import { FiltergA } from 'src/app/filterga';

@Component({
  selector: 'app-pdf-articulog-list',
  templateUrl: './pdf-articulog-list.component.html',
  styleUrls: ['./pdf-articulog-list.component.scss']
})
export class PdfArticulogListComponent implements OnInit {
  filter: FiltergA= new FiltergA();
  p_condominiuns_id:number;
  sub_inventario  : string;
  id: number;
  general: Observable<Articles[]>;
  filters: Observable<FiltergA[]>;
   Transaction : Observable<TransactionsEntrys[]>;
   Subinventarios :Observable<SubInventarys[]>;
   subcategorias :Observable<SubCategories[]>;
   Categorias : Observable<Categories[]>;
   Precios : Observable<Pricearticulo[]>;
   Articulos : Observable<Articles[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private generalService: ArticlesService,
    private TransactionService: TransactionsEntrysService,
    private SubinventariosService :SubInventarysService,
   private  SubcategoriasService:  SubCategoriesService,
    private CategoriasService : CategoriesService,
    private PreciosService : PrecioarticuloService,
    
  
    private router: Router) { }

    imprimirLista(id:number){
    const doc = new jsPDF(id);
      
      doc.fromHTML(document.getElementById('from-informacion'), 10,10);;
      doc.save(['lista']);
      
      console.log(id);
  
      }

      onSubmit() 
      {
        
        this.getsbusqueda();
   
      }
  

      //subinventario
      onSubmitsub() 
      {
        this.getsbusquedasub();
      }



  ngOnInit(): void {
     
       
      this.reloadData();
      this.reloadDatas();
      this.reloadDatass();
      this.reloadDatasss();
      this.reloadDatassss();
     
  }
  

  filtersget() {
    console.log(this.filter.sku);
    this.filter.p_admin_condominiuns_id = localStorage.getItem('condominums');
    console.log(this.filter);
    this.generalService.createFilters(this.filter).subscribe(
      data => {
        console.log(data);
        console.log('kaled');
        this.general =this.generalService.createFilters(this.filter);
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });

      
  }


  filtersgetsub() {
   
    console.log(this.filter.sub_inventarys_description);
    this.filter.p_admin_condominiuns_id = localStorage.getItem('condominums');
    
    console.log(this.filter);
   this.generalService.getEmployeesub(this.sub_inventario).subscribe(
      data => {
        console.log(data);
        console.log('kaled');
        this.general =this.generalService.createFilters(this.filter.sub_inventarys_description);
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });

      
  }


  reloadData() {

    
    this.generalService.getEmployeeReport(parseInt(localStorage.getItem('condominums'))).subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeReport(parseInt(localStorage.getItem('condominums')));
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



//TRansaction

  reloadDatas() {
    
    this.SubinventariosService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeList(this.id);
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


//Subinventario 
reloadDatass() {
    
  this.TransactionService.getEmployeeList().subscribe(
    data => {
      console.log(data);
      this.general = this.generalService.getEmployeeList(this.id);
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

//Subcategorias 
reloadDatasss() {
    
  this.SubcategoriasService.getEmployeeList().subscribe(
    data => {
      console.log(data);
      this.general = this.generalService.getEmployeeList(this.id);
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

//Categorias 
reloadDatassss() {
    
  this.CategoriasService.getEmployeeList().subscribe(
    data => {
      console.log(data);
      this.general = this.generalService.getEmployeeList(this.id);
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

//Precios 


reloadDatasssss() {
    
  this.PreciosService.getEmployeeList().subscribe(
    data => {
      console.log(data);
      this.general = this.generalService.getEmployeeList(this.id);
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
    this.generalService.deleteEmployees(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="El Articulo se a eliminado correctamente";
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
console.log(id);
    this.router.navigate(['articles1-details', id]);
  }

  updateGeneral(id: number){
    this.router.navigate(['update-articles', id]);
  }



  getsbusqueda()
    {
      if(this.filter.sku  == "" || this.filter.sku != null){
        this.filtersget();
      
    }
    else{
      alert("Ingrese sku para buscar");
    }
    
     
    }

  
    getsbusquedasub()
    {
      if(this.filter.sub_inventarys_description  == "" || this.filter.sub_inventarys_description != null){
        this.filtersgetsub();
      
    }
    else{
      alert("Ingrese subinventario para buscar");
    }

  }
}
