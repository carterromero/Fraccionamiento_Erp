import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateReleasesComponent } from './update-releases.component';


const routes: Routes = [
  {
    path: '',
    component: UpdateReleasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateReleasesRoutingModule { }