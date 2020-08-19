import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Billtopayservice } from 'src/app/billtopay.service';
import { Billtopay } from 'src/app/billtopay';
import * as jsPDF from 'jspdf'

import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'facpay-details',
  templateUrl: './facpay-details.component.html',
  styleUrls: ['./facpay-details.component.scss']
})
export class FacpayDetailsComponent implements OnInit {

  id: number;
  employee: Billtopay; 
  alertDisable = true;
  alertMessage = "null";

  name = 'Angular 5';
fileUrl;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: Billtopayservice,private sanitizer: DomSanitizer) { }


    
    ngOnInit() {
      this.employee = new Billtopay();    
      this.id = this.route.firstChild.snapshot.params['id']
      console.log(this.id);
      
      
      this.employeeService.getEmployee(this.id)
        .subscribe(data => {
          console.log(data);
          this.employee = data;
        }, error => {
          console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        });
    }
  
  
  

    gocv(){
      var windo = window.open("", "");  
      var objbuilder = '';
      objbuilder += ('<embed width=\'100%\' height=\'100%\'src="data:application/pdf;base64,');
      objbuilder += (this.employee.bilitoplay_arch);
      objbuilder += ('" type="application/pdf" />');
      windo.document.write(objbuilder); 
    }


    /*dsd(){
      
      var windo = window.open("", "fac");  
      const decodedData = windo.atob(this.employee.bi_archivo);
      console.log(atob(this.employee.bi_archivo)); 
      var objbuilder = '';
      objbuilder += ('<embed width=\'100%\' height=\'100%\'src="data:text/xml;base64,');
      objbuilder += (this.employee.bi_archivo);
      objbuilder += ('" type="application/xml"/>');
      windo.document.write(objbuilder); 
    }
  */


 dsd(){
      console.log("Hola wve")
  //var windo = window.open("", "fac");  
  //const decodedData = windo.atob(this.employee.bi_archivo);
 // console.log(atob(this.employee.bi_archivo)); 
  //var toString = '';
  //toString += ('<embed width=\'100%\' height=\'100%\'src="data:text/xml;base64,');
 // toString += ();
  //toString += ('" type="application/xml"/>');
  //windo.document.write(toString); 
  const data = atob(this.employee.bi_archivo);
  const blob = new Blob([data], { type: 'application/octet-stream' });
  
  this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));




  }
  
  



}