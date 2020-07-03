import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionConceptsDetailsRoutingModule } from './collection-concepts-details-routing.module';
import { CollectionConceptsDetailsComponent } from './collectionconcepts-details.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CollectionConceptsDetailsComponent],
  imports: [
    CommonModule,
    CollectionConceptsDetailsRoutingModule,
    SharedModule
  ]
})
export class CollectionConceptsDetailsModule { }