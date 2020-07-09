import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateCollectionComponent } from './update-collection.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateCollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCollectionRoutingModule { }