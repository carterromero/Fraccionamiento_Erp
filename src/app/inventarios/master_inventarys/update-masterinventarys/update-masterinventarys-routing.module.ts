import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterinventarysDetailsComponent } from '../masterinventarys-details/masterinventarys-details.component';

const routes: Routes = [
  {
    path: '',
    component: MasterinventarysDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateMasterInventarysRoutingModule { }