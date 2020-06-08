import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalsListComponent} from './legals-list.component';

const routes: Routes = [
  {
    path: '',
    component: LegalsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalsListRoutingModule { }