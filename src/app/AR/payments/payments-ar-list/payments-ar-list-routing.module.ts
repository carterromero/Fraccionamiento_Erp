import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsARListComponent} from './payments-ar-list.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsARListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsARListRoutingModule { }