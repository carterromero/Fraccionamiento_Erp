import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesDetailsComponent } from './articles-details.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesDetailsRoutingModule { }