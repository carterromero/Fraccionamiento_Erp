import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JournalslinListComponent} from './journalslin-list.component';

const routes: Routes = [
  {
    path: '',
    component: JournalslinListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalslinListRoutingModule { }