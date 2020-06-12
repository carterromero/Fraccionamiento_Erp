import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateLegalsComponent } from './update-legals.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateLegalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateLegalsRoutingModule { }