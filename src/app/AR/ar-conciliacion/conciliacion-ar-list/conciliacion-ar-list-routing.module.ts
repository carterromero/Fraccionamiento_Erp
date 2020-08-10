import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConciliacionARListComponent} from './conciliacion-ar-list.component';

const routes: Routes = [
  {
    path: '',
    component: ConciliacionARListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliacionARListRoutingModule { }