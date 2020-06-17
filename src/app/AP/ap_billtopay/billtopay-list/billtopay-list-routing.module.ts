import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilltopayListComponent} from './billtopay-list.component';

const routes: Routes = [
  {
    path: '',
    component: BilltopayListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BilltopayListRoutingModule { }