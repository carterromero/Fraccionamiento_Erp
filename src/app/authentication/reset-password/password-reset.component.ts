import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/admin/user.service';
import { User } from 'src/app/services/admin/user';
import { Permissions } from 'src/app/services/admin/permissions';
import { PermissionsService } from 'src/app/services/admin/permissions.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    authentication: User = new User();  
    submitted = false;
    alertDisable = true;
    alertMessage = "null";
    permisions:Permissions =  new Permissions();
    
  
    constructor(private authenticationService: UserService,
      private generalService: PermissionsService
      ,private router: Router) { }
  
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
  
    ResetPass() 
    {    
      this.authenticationService.Reset(this.authentication)
        .subscribe(data => 
          {
          this.authentication = data;
          console.log(this.authentication);
          if(this.authentication.user_id != 0)
          {
            localStorage.setItem('id', this.authentication.user_id.toString());
            localStorage.setItem('rol', this.authentication.rol_id.toString());
            localStorage.setItem('condominums', this.authentication.condominums_id.toString());
            
            this.permisions.rol_id = localStorage.getItem("rol");
            this.generalService.getEmployeeP(this.permisions)
              .subscribe(data => {
                console.log("aqui es navigator");
                this.permisions = new Permissions();
                this.permisions = data;

              this.goToHome();   
              }, error => {
                console.log(error);
               
              });
  
  
          
              
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
      this.ResetPass();    
    }
  
    goToHome() {
      this.router.navigate(['dashboard/default']);
    }
  
}
