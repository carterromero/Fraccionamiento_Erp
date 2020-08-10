import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaldovaListComponent} from './saldova-list.component';

const routes: Routes = [
  {
    path: '',
    component: SaldovaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaldovaListRoutingModule { }
