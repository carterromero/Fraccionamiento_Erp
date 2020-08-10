import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentTermsListComponent} from './payment-terms-list.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentTermsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentTermsLisRoutingtModule { }