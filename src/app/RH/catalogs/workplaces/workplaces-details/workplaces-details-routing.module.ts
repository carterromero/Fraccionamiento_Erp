import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkplacesDetailsComponent } from './workplaces-details.component';

const routes: Routes = [
  {
    path: '',
    component: WorkplacesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkplacesDetailsRoutingModule { }