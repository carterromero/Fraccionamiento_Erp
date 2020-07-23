import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateConciliacionARComponent } from './create-conciliacion-ar.component';

const routes: Routes = [
  {
    path: '',
    component: CreateConciliacionARComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCreditorRoutingModule { }