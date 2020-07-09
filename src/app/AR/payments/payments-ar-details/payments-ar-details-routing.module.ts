import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsARDetailsComponent } from './payments-ar-details.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsARDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsARDetailsRoutingModule { }