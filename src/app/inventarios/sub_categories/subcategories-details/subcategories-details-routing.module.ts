import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcategoriesDetailsComponent } from './subcategories-details.component';

const routes: Routes = [
  {
    path: '',
    component: SubcategoriesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoriesDetailsRoutingModule { }