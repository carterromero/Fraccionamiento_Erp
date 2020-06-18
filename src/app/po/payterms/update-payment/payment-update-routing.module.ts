import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePaymentComponent } from './update-payment.component';




const routes: Routes = [
  {
    path: '',
    component: UpdatePaymentComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PaymentUpdateRoutingModule { }