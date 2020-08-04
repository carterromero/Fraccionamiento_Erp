import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateReleasesComponent } from './create-releases.component';

const routes: Routes = [
  {
    path: '',
    component: CreateReleasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateReleasesRoutingModule { }