import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSubcategoriesComponent } from './create-subcategories.component';

const routes: Routes = [
  {
    path: '',
    component: CreateSubcategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSubcategoriesRoutingModule { }