import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcInactiveTagsListComponent } from './ac-inactive-tags-list.component';


const routes: Routes = [
  {
    path: '',
    component: AcInactiveTagsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcInactiveTagsListRoutingModule { }
