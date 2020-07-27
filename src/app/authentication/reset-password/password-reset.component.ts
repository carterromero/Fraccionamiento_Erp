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
                
                this.permisions.rol_id = localStorage.getItem("rol");
                this.generalService.getEmployeeP(this.permisions)
                  .subscribe(data => {
                    console.log("aqui es navigator");
                    this.permisions = new Permissions();
                    this.permisions = data;
                    console.log(this.permisions);
                  localStorage.setItem("compras",this.permisions.permissions_compras);
                  localStorage.setItem("cxp",this.permisions.permissions_cxp);
                  localStorage.setItem("cxc",this.permisions.permissions_cxc);
                  localStorage.setItem("contabilidad",this.permisions.permissions_contabilidad);
                  localStorage.setItem("admin",this.permisions.permissions_admin);
                  localStorage.setItem("tesoreria",this.permisions.permissions_tesoreria);
                  localStorage.setItem("rh",this.permisions.permissions_rh);
                  localStorage.setItem("inquilino",this.permisions.permissions_inquilino);
                  localStorage.setItem("inventario",this.permisions.permissions_inventario);
                  localStorage.setItem("nomina",this.permisions.permissions_nomina);
                  localStorage.setItem("control",this.permisions.permissions_control);
                  localStorage.setItem("proveedor",this.permisions.permissions_control);
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
      this.alertDisable = false;
      this.submitted = true;
      if(this.authentication.user_password == this.authentication.user_passwordR){
      this.ResetPass();    
     }
      else
           this.alertDisable = true;
           this.alertMessage = "Las contraseñas no coinciden";
    }
  
    goToHome() {
      this.router.navigate(['dashboard/default']);
    }
  
}