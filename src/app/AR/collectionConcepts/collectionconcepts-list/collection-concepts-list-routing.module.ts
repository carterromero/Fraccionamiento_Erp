import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionConceptsListComponent} from './collectionconcepts-list.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionConceptsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionConceptsRoutingModule { }