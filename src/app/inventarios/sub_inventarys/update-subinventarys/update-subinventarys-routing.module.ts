import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateSubinventarysComponent } from './update-subinventarys.component';

const routes: Routes = [
  {
    path: '',
    component:  UpdateSubinventarysComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateSubinventarysRoutingModule { }