import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionConceptsUpdateComponent } from './update-collectionconcepts.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionConceptsUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionConceptsRoutingModule { }