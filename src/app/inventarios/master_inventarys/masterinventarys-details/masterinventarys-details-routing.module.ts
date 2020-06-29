import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterinventarysListComponent } from '../masterinventarys-list/masterinventarys-list.component';

const routes: Routes = [
  {
    path: '',
    component: MasterinventarysListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterInventarysListRoutingModule { }