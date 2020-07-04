import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionConceptsRoutingModule } from './collection-concepts-list-routing.module';
import { CollectionConceptsListComponent } from './collectionconcepts-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CollectionConceptsListComponent],
  imports: [
    CommonModule,
    CollectionConceptsRoutingModule,
    SharedModule
  ]
})
export class CollectionConceptsListModule { }