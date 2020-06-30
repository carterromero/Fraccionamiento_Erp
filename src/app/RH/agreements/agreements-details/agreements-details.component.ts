import { Component, OnInit } from '@angular/core';
import { Agreements } from 'src/app/agreements';
import { ActivatedRoute, Router } from '@angular/router';
import { AgreementService } from 'src/app/agreements.service';

@Component({
  selector: 'app-agreements-details',
  templateUrl: './agreements-details.component.html',
  styleUrls: ['./agreements-details.component.scss']
})
export class AgreementsDetailsComponent implements OnInit {
  id: number;
  agreement: Agreements;
  alertDisable = true;
  alertMessage = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
    private agreementService: AgreementService) { }

 ngOnInit() {
    this.agreement = new Agreements();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.agreementService.getAgreement(this.id)
      .subscribe(data => {
        console.log(data);
        this.agreement = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }
}
