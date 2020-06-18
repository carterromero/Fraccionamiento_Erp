import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateSubcategoriesComponent } from './update-subcategories.component';

const routes: Routes = [
  {
    path: '',
    component:  UpdateSubcategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateSubCategoriesRoutingModule { }