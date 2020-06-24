import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaytmentListComponent } from './paytment-list.component';



const routes: Routes = [
  {
    path: '',
    component: PaytmentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PaymentListRoutingModule { }