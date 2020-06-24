import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePayrollComponent } from './update-payroll.component';
const routes: Routes = [
  {
    path: '',
    component: UpdatePayrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePayrollRoutingModule{ }