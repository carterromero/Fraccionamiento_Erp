import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondominumsListComponent } from './condominums-list.component';

const routes: Routes = [
  {
    path: '',
    component: CondominumsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominumsListRoutingModule { }