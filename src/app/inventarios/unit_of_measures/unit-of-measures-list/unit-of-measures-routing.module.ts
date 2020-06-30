import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitOfMeasuresListComponent} from './unit-of-measures-list.component';

const routes: Routes = [
  {
    path: '',
    component: UnitOfMeasuresListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitOfMeasuresListRoutingModule { }