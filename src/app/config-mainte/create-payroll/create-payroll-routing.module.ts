import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePayrollComponent } from './create-payroll.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePayrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePayrollRoutingModule { }