import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePaymentTermsComponent } from './create-payment-terms.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePaymentTermsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePaymentTermsRoutingModule { }