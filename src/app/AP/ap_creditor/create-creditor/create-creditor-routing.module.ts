import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCreditorComponent } from './create-creditor.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCreditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCreditorRoutingModule { }