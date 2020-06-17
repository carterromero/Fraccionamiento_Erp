import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurcharseListComponent } from './purcharse-list.component';


const routes: Routes = [
  {
    path: '',
    component: PurcharseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurcharseListRoutingModule { }