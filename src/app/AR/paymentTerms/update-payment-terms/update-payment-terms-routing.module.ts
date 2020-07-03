import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePaymentTermsComponent } from './update-payment-terms.component';

const routes: Routes = [
  {
    path: '',
    component: UpdatePaymentTermsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePaymentTermsRoutingModule { }