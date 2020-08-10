import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusListComponent } from './status-list.component';


const routes: Routes = [
  {
    path: '',
    component: StatusListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusListRoutingModule { }