import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConciliacionDetailsComponent } from './conciliacion-details.component';

const routes: Routes = [
  {
    path: '',
    component: ConciliacionDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliacionDetailsRoutingModule { }