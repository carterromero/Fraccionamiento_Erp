import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LinesListComponent} from './lines-list.component';

const routes: Routes = [
  {
    path: '',
    component: LinesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinesListRoutingModule { }