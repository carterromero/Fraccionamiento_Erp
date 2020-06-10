import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateCategoriesComponent } from './update-categories.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCategoriesRoutingModule { }