import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsDetailsComponent } from './departments-details.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsDetailsRoutingModule { }