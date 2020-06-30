import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateArticlesComponent } from './update-articles.component';

const routes: Routes = [
  {
    path: '',
    component:  UpdateArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateArticlesRoutingModule { }