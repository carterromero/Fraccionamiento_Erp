import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPayrollComponent } from './details-payroll.component';
const routes: Routes = [
  {
    path: '',
    component: DetailsPayrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPayrollRoutingModule{ }