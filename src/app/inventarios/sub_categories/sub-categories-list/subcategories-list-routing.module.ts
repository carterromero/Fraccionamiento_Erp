import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubCategoriesListComponent} from './subcategories-list.component';

const routes: Routes = [
  {
    path: '',
    component: SubCategoriesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoriesListRoutingModule { }