import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConciliacionpListComponent} from './conciliacionp-list.component';

const routes: Routes = [
  {
    path: '',
    component: ConciliacionpListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliacionpListRoutingModule { }