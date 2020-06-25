import { Component, OnInit } from '@angular/core';
import { AgreementService } from 'src/app/agreements.service';
import { Agreements } from 'src/app/agreements';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-agreements',
  templateUrl: './create-agreements.component.html',
  styleUrls: ['./create-agreements.component.scss']
})
export class CreateAgreementsComponent implements OnInit {
  
  agreement: Agreements = new Agreements();
  submitted = false;

  constructor(private agreementService: AgreementService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.agreement = new Agreements();
  }

  save() {
    this.agreementService.createAgreement(this.agreement)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
     //   this.router.navigate(['auth/signin']);
      });
    this.agreement = new Agreements();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['agreements-list']);
  }
}