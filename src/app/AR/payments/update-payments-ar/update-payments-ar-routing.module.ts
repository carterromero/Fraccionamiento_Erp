import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePaymentsARComponent } from './update-payments-ar.component';

const routes: Routes = [
  {
    path: '',
    component: UpdatePaymentsARComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePaymentsARRoutingModule { }