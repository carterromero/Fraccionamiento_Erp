import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentDocumentsListComponent } from './payment-documents-list.component';



const routes: Routes = [
  {
    path: '',
    component: PaymentDocumentsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PaymentDocumentsListRoutingModule { }