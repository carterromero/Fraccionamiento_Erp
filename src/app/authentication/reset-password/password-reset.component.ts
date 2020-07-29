import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    authentication = new User();  
    authentica = new User();
    submitted = false;
    alertDisable = false;
    alertMessage = "null";
    alertDisables = false;
    alertMessages = "null";
    correo: string;
    permisions:Permissions =  new Permissions();

  
    constructor(private authenticationService: UserService,
      private generalService: PermissionsService,private router: Router,private route: ActivatedRoute) {
       }

      

    ngOnInit() {
      //this.authentication.user_email;
     // this.authentication.user_password;
     //this.initForm();     
    }

    initalSubmit(): void {
      this.submitted = false;
      this.authentication = new User();
      this.authentica = new User();
    }
  
    ResetPass() 
    {    
    
     this.authentication.user_email = localStorage.getItem('correo');
      this.authenticationService.updateReset(this.authentication.user_email, this.authentica)
        .subscribe(data => 
          {
          //  console.log(this.authentica);
          //  this.authenticate();
            console.log(data);
        //    this.goToHome();
              }, error => {
                console.log(error);
              });
        }



      /*  authenticate() 
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
        }*/
  
    onSubmit() { 

      this.submitted=true;
      this.ResetPass(); 
      this.goToHome();     
  }
  
    goToHome() {
      this.router.navigate(['auth/signin']);
    }
  
}
