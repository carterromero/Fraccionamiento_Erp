import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondominumsListComponent1 } from './condominums-list.component';

const routes: Routes = [
  {
    path: '',
    component: CondominumsListComponent1
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominumsListRoutingModule1 { }
