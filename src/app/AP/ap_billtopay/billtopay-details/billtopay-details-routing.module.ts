import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilltopayDetailsComponent } from './billtopay-details.component';

const routes: Routes = [
  {
    path: '',
    component: BilltopayDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BilltopayDetailsRoutingModule { }