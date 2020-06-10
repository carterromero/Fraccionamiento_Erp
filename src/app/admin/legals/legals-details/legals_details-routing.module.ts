import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalsDetailsComponent } from './legals-details.component';

const routes: Routes = [
  {
    path: '',
    component: LegalsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalsDetailsRoutingModule { }