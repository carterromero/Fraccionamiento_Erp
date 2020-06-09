import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLegalsComponent } from './create-legals.component';

const routes: Routes = [
  {
    path: '',
    component: CreateLegalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateLegalsRoutingModule { }