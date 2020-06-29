import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatecollectionComponent } from './update-collection.component';

const routes: Routes = [
  {
    path: '',
    component: UpdatecollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatecollectionRoutingModule { }