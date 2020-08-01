import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReleasesListComponent } from './releases-list.component';


const routes: Routes = [
  {
    path: '',
    component: ReleasesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleasesListRoutingModule { }