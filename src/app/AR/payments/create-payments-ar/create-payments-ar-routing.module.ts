import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePaymentsARComponent } from './create-payments-ar.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePaymentsARComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePaymentsARRoutingModule { }