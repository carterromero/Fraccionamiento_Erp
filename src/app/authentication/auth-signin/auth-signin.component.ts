import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/admin/user.service';
import { User } from 'src/app/services/admin/user';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  authentication: User = new User();  
  submitted = false;
  alertDisable = true;
  alertMessage = "null";
  

  constructor(private authenticationService: UserService,

    private router: Router) { }

  ngOnInit() {
    if((localStorage.getItem('id')== null))
    {
      localStorage.setItem('id', "");
    }
    else
    {
      if(localStorage.getItem('id')== "" )
      {       
        console.log("no hay datos1");
      
      }
      else if(localStorage.getItem('id')== "0" )
      {
        console.log("no hay datos2");
      }
      else
      {
       this.goToHome();
      }
    }
    this.authentication.user_email;
    this.authentication.user_password;
  }

  initalSubmit(): void {
    this.submitted = false;
    this.authentication = new User();
  }

  authenticate() 
  {    
    this.authenticationService.login(this.authentication)
      .subscribe(data => 
        {
        this.authentication = data;
        console.log(this.authentication);
        if(this.authentication.user_id != 0)
        {
          localStorage.setItem('id', this.authentication.user_id.toString());
          localStorage.setItem('rol', this.authentication.rol_id.toString());
          localStorage.setItem('condominums', this.authentication.condominums_id.toString());
          this.goToHome();   
            
        }
        else
        {
          this.alertDisable = false;
          this.alertMessage = 'Usuario y Contraseña Incorrecta';               
        }
      },
      error => {console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }    
      });            
  }

  onSubmit() {
    this.submitted = true;
    this.authenticate();    
  }

  goToHome() {
    this.router.navigate(['dashboard/default']);
  }

}
