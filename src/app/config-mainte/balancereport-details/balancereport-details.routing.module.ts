import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalancereportDetailsComponent } from './balancereport-details.component';

const routes: Routes = [
  {
    path: '',
    component: BalancereportDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalancereportDetailsRoutingModule { }