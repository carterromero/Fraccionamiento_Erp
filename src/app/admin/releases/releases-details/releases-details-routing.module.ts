import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReleasesDetailsComponent } from './releases-details.component'

const routes: Routes = [
  {
    path: '',
    component: ReleasesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleasesDetailsRoutingModule { }