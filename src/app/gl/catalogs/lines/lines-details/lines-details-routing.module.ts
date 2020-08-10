import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinesDetailsComponent } from './lines-details.component';

const routes: Routes = [
  {
    path: '',
    component: LinesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinesDetailsRoutingModule { }