import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCommentsComponent } from './create-comments.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCommentsRoutingModule { }