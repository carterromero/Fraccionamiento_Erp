import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePaymentRecordComponent} from './update-payment-record.component';

const routes: Routes = [
  {
    path: '',
    component: UpdatePaymentRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePaymentRecordRoutingModule { }