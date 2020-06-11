import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondominumsDetailsComponent } from './condominums-details.component';

const routes: Routes = [
  {
    path: '',
    component: CondominumsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominumsDetailsRoutingModule { }