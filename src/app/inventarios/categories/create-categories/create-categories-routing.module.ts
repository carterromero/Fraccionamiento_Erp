import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCategoriesComponent } from './create-categories.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCategoriesRoutingModule { }