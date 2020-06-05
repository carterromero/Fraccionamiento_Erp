import { Component, OnInit } from '@angular/core';
import { Authentication } from '../../authentication';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  authentication: Authentication = new Authentication();  
  submitted = false;

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    if((localStorage.getItem('token')== null))
    {
      localStorage.setItem('token', "");
    }
    else
    {
      if(localStorage.getItem('token')!= "")
      {        
        this.goToHome();
      }
    }
  }

  initalSubmit(): void {
    this.submitted = false;
    this.authentication = new Authentication();
  }

  authenticate() {  
    
    this.authenticationService.login(this.authentication)
      .subscribe(data => {
        let coins = [];
        for (let key in data) {
            localStorage.setItem('token', data['access_token']);
        }
        console.log(localStorage.getItem('token'));
        this.getUserId();
        this.goToHome();        
      }, error => console.log(error));            
  }

  getUserId() {    
    this.authenticationService.getUser()
      .subscribe(data => {
        console.log(data);
        let coins = [];
        for (let key in data) {
            localStorage.setItem('userId', data['id']);
        }
        console.log(localStorage.getItem('userId'));
      }, error => console.log(error)); 
  }

  onSubmit() {
    this.submitted = true;
    this.authenticate();    
  }

  goToHome() {
    this.router.navigate(['dashboard/default']);
  }

}
