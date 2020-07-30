import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsiListComponent} from './consi-list.component';

const routes: Routes = [
  {
    path: '',
    component: ConsiListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsiListRoutingModule { }
