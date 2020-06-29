import { Component, OnInit } from '@angular/core';
import { AgreementService } from "src/app/agreements.service";
import { Agreements } from "src/app/agreements";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-agreements',
  templateUrl: './update-agreements.component.html',
  styleUrls: ['./update-agreements.component.scss']
})
export class UpdateAgreementsComponent implements OnInit {

  id: number;
  agreement: Agreements;

  constructor(private route: ActivatedRoute,private router: Router,
    private agreementService: AgreementService) { }

  ngOnInit() {
    this.agreement = new Agreements();


    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.agreement.agreements_status);
    this.agreementService.getAgreement(this.id)
      .subscribe(data => {
        console.log(data);
        this.agreement = data;
        this.agreement.agreements_status = (String(this.agreement.agreements_status) == "false") ? null:"false";
        console.log(this.agreement.agreements_status);
      }, error => {
        console.log(error);
        
      });
      
  }

  updateAgreement() {
    console.log(this.agreement);
    console.log(this.id);
    
    this.agreementService.updateAgreement(this.id, this.agreement)
      .subscribe(data => {console.log(data);
        this.gotoList();  
      }, 
      error => {
        console.log(error);
        
      });
    
  
  }

  onSubmit() {
    this.updateAgreement();    
  }

  gotoList() {
    this.router.navigate(['agreements-list']);
  }


}
