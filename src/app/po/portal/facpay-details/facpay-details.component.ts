import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Billtopayservice } from 'src/app/billtopay.service';
import { Billtopay } from 'src/app/billtopay';




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

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: Billtopayservice) { }

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
      var windo = window.open("", "Factura");  
      var objbuilder = '';
      objbuilder += ('<embed width=\'100%\' height=\'100%\'  src="data:application/pdf;base64,');
      objbuilder += (this.employee.bilitoplay_arch);
      objbuilder += ('" type="application/pdf" />');
      windo.document.write(objbuilder); 
    }


    dsd(){
      var windo = window.open("", "fac");  
      var objbuilder = '';
      objbuilder += ('<embed width=\'100%\' height=\'100%\'  src="data:application/pdf;base64,');
      objbuilder += (this.employee.bi_archivo);
      objbuilder += ('" type="application/pdf" />');
      windo.document.write(objbuilder); 
    }
  



  }
  
  



