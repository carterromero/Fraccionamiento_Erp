import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { TranslService } from "../../../../services/gl/transl.service";
import { Transl } from "../../../../services/gl/transl";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-consi-list',
  templateUrl: './consi-list.component.html',
  styleUrls: ['./consi-list.component.scss']
})
export class ConsiListComponent implements OnInit {


  general: Observable<Transl[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private generalService: TranslService,
  
    private router: Router) { }

  ngOnInit(): void {
      
      this.reloadData();
  }

  reloadData() {
   
    this.generalService.getEmployeesconsilia().subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getEmployeesconsilia();
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
  exportTableToExcel() {
    var type = "xlsx"
    var elt = document.getElementById('frmEquipos');
    var wb = XLSX.utils.table_to_book(elt);
    return XLSX.writeFile(wb, undefined || ('REPORTECONCILIACION.' + (type || 'xlsx')));
  }



}
