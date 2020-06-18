import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePaytmentComponent } from './create-paytment.component';





const routes: Routes = [
  {
    path: '',
    component:CreatePaytmentComponent 
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PaymentCreatetRoutingModule { }