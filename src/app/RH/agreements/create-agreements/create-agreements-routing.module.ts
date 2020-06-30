import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAgreementsComponent } from './create-agreements.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAgreementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAgreementsRoutingModule { }