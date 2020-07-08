import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccolintypeListComponent} from './accolintype-list.component';

const routes: Routes = [
  {
    path: '',
    component: AccolintypeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccolintypeListRoutingModule { }