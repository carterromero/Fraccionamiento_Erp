import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConciliacionARDetailsComponent } from './conciliacion-ar-details.component';

const routes: Routes = [
  {
    path: '',
    component: ConciliacionARDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliacionDetailsRoutingModule { }