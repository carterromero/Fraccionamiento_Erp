import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSubinventarysComponent } from './create-subinventarys.component';

const routes: Routes = [
  {
    path: '',
    component: CreateSubinventarysComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSubinventarysRoutingModule { }