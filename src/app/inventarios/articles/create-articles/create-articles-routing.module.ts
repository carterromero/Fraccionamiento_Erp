import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArticlesComponent } from './create-articles.component';

const routes: Routes = [
  {
    path: '',
    component: CreateArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateArticlesRoutingModule { }