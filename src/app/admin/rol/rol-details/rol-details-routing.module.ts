import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolDetailsComponent } from './rol-details.component';

const routes: Routes = [
  {
    path: '',
    component: RolDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolDetailsRoutingModule { }