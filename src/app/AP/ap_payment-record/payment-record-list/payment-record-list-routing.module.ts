import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentRecordListComponent} from './payment-record-list.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentRecordListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRecordListRoutingModule { }
