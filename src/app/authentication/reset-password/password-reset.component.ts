import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/admin/user.service';
import { User } from 'src/app/services/admin/user';
import { Permissions } from 'src/app/services/admin/permissions';
import { PermissionsService } from 'src/app/services/admin/permissions.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
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
      this.authentication.user_email;
      this.authentication.user_password;
    }
  
    initalSubmit(): void {
      this.submitted = false;
      this.authentication = new User();
    }
  
    ResetPass() 
    {    
      this.authenticationService.Reset(this.authentication.user_email)
        .subscribe(data => 
          {
          this.authentication = data;
              this.goToHome();   
              }, error => {
                console.log(error);
              });
        }
  
    onSubmit() {
      this.alertDisable = true;
      
      this.submitted = true;
    //  if(this.authentication.user_password== this.authentication.user_password){
      this.ResetPass();    
     /* }
      else
           this.alertMessage = "Las contraseñas no coinciden";*/
    }
  
    goToHome() {
      this.router.navigate(['dashboard/default']);
    }
  
}
