import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMasterinventarysComponent } from './create-masterinventarys.component';

const routes: Routes = [
  {
    path: '',
    component: CreateMasterinventarysComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateMasterinventarysRoutingModule { }