import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import * as jsPDF from 'jspdf'
import { Purcharse } from 'src/app/purcharse';
import { PurcharseService } from 'src/app/purcharse.service';

@Component({
  selector: 'app-pdf-purcharse-list',
  templateUrl: './pdf-purcharse-list.component.html',
  styleUrls: ['./pdf-purcharse-list.component.scss']
})
export class PdfPurcharseListComponent implements OnInit {

  id: number;
  generals: Purcharse;

  general: Observable<Purcharse[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private route: ActivatedRoute,private generalService: PurcharseService,
    private router: Router) { }

  ngOnInit(): void {
    this.generals = new Purcharse();    
        this.id = this.route.firstChild.snapshot.params['id']
        console.log(this.id);
        this.reloadData();
        this.generalService. getEmployeeList(this.id)
          .subscribe(data => {
            console.log(data);
            this.generals = data;
          }, error => {
            console.log(error);
            //localStorage.setItem('token', "");
            //this.router.navigate(['auth/signin']);
          });
      





      this.reloadData();
  }


  imprimirLista(){
      
      
    const doc = new jsPDF();
    
    doc.fromHTML(document.getElementById('from-informacion'), 10,10);;
    doc.save(['lista']);
    
    console.log();

    }
  


  
  reloadData() {
    
    this.generalService.getEmployeeList(parseInt(localStorage.getItem('condominums'))).subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeeList(1);
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
    this.generalService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="El fraccionamiento se a eliminado correctamente";
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
    this.router.navigate(['pdf-purcharse-repor-details', id]);
  }

 

}
