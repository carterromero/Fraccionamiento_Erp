import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionConceptsDetailsComponent } from './collectionconcepts-details.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionConceptsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionConceptsDetailsRoutingModule { }