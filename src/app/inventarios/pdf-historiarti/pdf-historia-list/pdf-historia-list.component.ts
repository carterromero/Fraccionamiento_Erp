import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Historiaa } from '../../historiaa';
import { Articles } from 'src/app/articles';
import { TransactionsEntrys } from 'src/app/transactionsentrys';
import { SubInventarys } from 'src/app/subinventarys';
import { Categories } from 'src/app/categories';
import { SubCategories } from 'src/app/subcategories';
import { Pricearticulo } from 'src/app/pricearticles';
import { ArticlesService } from 'src/app/articles.service';
import { TransactionsEntrysService } from 'src/app/transactionsentrys.service';
import { SubInventarysService } from 'src/app/subinventarys.service';
import { SubCategoriesService } from 'src/app/subcategories.service';
import { CategoriesService } from 'src/app/categories.service';
import { PrecioarticuloService } from 'src/app/precioarticulo.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as jsPDF from 'jspdf'
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-pdf-historia-list',
  templateUrl: './pdf-historia-list.component.html',
  styleUrls: ['./pdf-historia-list.component.scss']
})
export class PdfHistoriaListComponent implements OnInit {



  generals: Historiaa= new Historiaa();
  id: number;
  generall: Historiaa;
 
  general: Observable<Historiaa[]>;
  
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

  constructor(private route: ActivatedRoute,private generalService: ArticlesService,
    private TransactionService: TransactionsEntrysService,
    private SubinventariosService :SubInventarysService,
   private  SubcategoriasService:  SubCategoriesService,
    private CategoriasService : CategoriesService,
    private PreciosService : PrecioarticuloService,
    
  
    private router: Router) { }

    imprimirLista()  : void{ 
      if(this.general){ 
        let element = document.getElementById('tenants'); 
         console.log(element); 
      }    
      
      const doc = new jsPDF();
      
      doc.fromHTML(document.getElementById('tenants'), 10,10);;
      doc.save(['lista']);
      
      console.log();
  
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
  
  reloadData() {
  
    this.generalService.getEmployeeHistori(parseInt(localStorage.getItem('condominums'))).subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeHistori(parseInt(localStorage.getItem('condominums')));
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


  
      
  exportExcelTenants(): void 
  {   
    if(this.general){ 
    let element = document.getElementById('tenants'); 
     console.log(element); 

     //let options:JSON2SheetOpts  = {header: ['Tag Codigo', 'Nombre Completo', 'Número de vivienda','Activo / Inactivo','Entrada','Salida']};
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element,{raw:true});

     ws['!cols'] = [
      {wpx: 150}, // "characters"
      {wpx: 150}, // "pixels"
      {wpx: 150},
      {wpx: 80},
      {wpx: 175},
      {wpx: 175}
      //{hidden: true} // hide column
    ];

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     //console.log(wb);
     //const wb: XLSX.WorkBook = { Sheets: {'data': ws}, SheetNames:['data']};
     XLSX.utils.book_append_sheet(wb, ws, 'Tags de Viviendas');

     /* save to file */
     XLSX.writeFile(wb, 'Reporte_General_Articulos.xlsx',{type: "base64"});
    }else{
      console.log('Realice busqueda');
    }
    
  }

  
  filtersget() {
    console.log(this.generals.articles_sku);
    this.generals.p_admin_condominiuns_id = localStorage.getItem('condominums');
    console.log(this.generals);
    this.generalService.createFilterHistoria(this.generals).subscribe(
      data => {
        console.log(data);
        console.log('kaled');
        this.general =this.generalService.createFilterHistoria(this.generals);
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });

      
  }
  filtersgetsub() {
   
    console.log(this.generals.sub_inventario);
    this.generals.p_admin_condominiuns_id = localStorage.getItem('condominums');
    
    console.log(this.generals);
   this.generalService.getEmployeesub(this.generals).subscribe(
      data => {
        console.log(data);
        console.log('kaled');
        this.general =this.generalService.getEmployeesub(this.generals);
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });

      
  }




  reloadDatas() {
    
    this.SubinventariosService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.Subinventarios = this.SubinventariosService.getEmployeeList();
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

//Transaccopm
reloadDatass() {
    
  this.TransactionService.getEmployeeList().subscribe(
    data => {
      console.log(data);
      this.Transaction = this.TransactionService.getEmployeeList();
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
      this.subcategorias = this.SubcategoriasService.getEmployeeList();
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
      this.Categorias = this.CategoriasService.getEmployeeList();
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
      this.Precios = this.PreciosService.getEmployeeList();
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
    if(this.generals.articles_sku  == "" || this.generals.articles_sku != null){
      this.filtersget();
    
  }
  else{
    alert("Ingrese sku para buscar");
  }
  
   
  }




  getsbusquedasub()
  {
    if(this.generals.sub_inventario  == "" || this.generals.sub_inventario != null){
      this.filtersgetsub();
    
  }
  else{
    alert("Ingrese subinventario para buscar");
  }

}





}
