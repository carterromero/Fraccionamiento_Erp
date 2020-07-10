import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TranslListComponent} from './transl-list.component';

const routes: Routes = [
  {
    path: '',
    component: TranslListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranslListRoutingModule { }