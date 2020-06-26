import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateCustomerComponent } from './update-customer.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCustomerRoutingModule { }