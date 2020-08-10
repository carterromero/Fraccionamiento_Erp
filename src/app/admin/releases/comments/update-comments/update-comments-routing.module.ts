import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateCommentsComponent } from './update-comments.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateCommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCommentsRoutingModule { }