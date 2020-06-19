import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesDetailsComponent } from './categories-details.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesDetailsRoutingModule { }