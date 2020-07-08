import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JournalsListComponent} from './journals-list.component';

const routes: Routes = [
  {
    path: '',
    component: JournalsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalsListRoutingModule { }