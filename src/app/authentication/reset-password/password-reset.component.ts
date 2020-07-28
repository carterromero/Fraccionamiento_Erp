import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/admin/user.service';
import { User } from 'src/app/services/admin/user';
import { Permissions } from 'src/app/services/admin/permissions';
import { PermissionsService } from 'src/app/services/admin/permissions.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from './reset-password.validator';


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
    form: FormGroup| null = null;
  
    constructor(private authenticationService: UserService,
      private generalService: PermissionsService,private router: Router,private route: ActivatedRoute,private fb: FormBuilder) {
        
    this.form = this.fb.group({
      password: ['', [Validators.required]],
      repeat_password: ''
    });

    this.form.get('repeat_password').setValidators(
      CustomValidators.equals(this.form.get('password'))
    );
       }

       initForm() {
        this.form = this.fb.group({
          'contrasena':  this.authentica.user_password,
          'repetirContrasena': this.authentication.user_password
        });
      }

    ngOnInit() {
      //this.authentication.user_email;
     // this.authentication.user_password;
     this.initForm();
    }

 /* checarSiSonIguales(): boolean {
    return this.form.hasError('noSonIguales') &&
      this.form.get('password').dirty &&
      this.form.get('confirmarPassword').dirty;
  }*/
    initalSubmit(): void {
      this.submitted = false;
      this.authentication = new User();
      this.authentica = new User();
    }
  
    ResetPass() 
    {    

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
      const password = this.form.get('password').value as string;
      this.submitted=true;
      this.ResetPass();  
   /*   this.alertDisables = false;
      
    if(this.authentica.user_password != this.authentication.user_password){
      this.alertDisables = true;
      this.alertMessages = "Contraseña actualizada";
   }
   else{
           this.alertDisable = true;
          this.alertMessage = "Contraseña no Actualizada";*/
          
  // }
    
  }
  
    goToHome() {
      this.router.navigate(['dashboard/default']);
    }
  
}
