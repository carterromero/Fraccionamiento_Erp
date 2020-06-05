import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {

  user: User = new User();  
  submitted = false;

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  initalSubmit(): void {
    this.submitted = false;
    this.user = new User();
  }

  register() {      
    this.authenticationService.signup(this.user)
      .subscribe(data => {        
        let coins = [];
        for (let key in data) {
            localStorage.setItem('token', data['access_token']);
        }
        console.log(localStorage.getItem('token'));
        this.goToLogin();        
      }, error => console.log(error));            
  }

  onSubmit() {
    this.submitted = true;
    this.register();    
  }

  goToLogin() {
    this.router.navigate(['auth/signin']);
  }
}
