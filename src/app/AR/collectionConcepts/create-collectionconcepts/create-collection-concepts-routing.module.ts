import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionConceptsCreateComponent } from './create-collectionconcepts.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionConceptsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionConceptsRoutingModule { }