import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConciliacionListComponent} from './conciliacion-list.component';

const routes: Routes = [
  {
    path: '',
    component: ConciliacionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliacionListRoutingModule { }