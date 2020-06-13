import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCondominumsComponent } from './create-condominums.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCondominumsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCondominumsRoutingModule { }