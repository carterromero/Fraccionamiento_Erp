import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionConceptsRoutingModule } from './update-collection-concepts-routing.module';
import { CollectionConceptsUpdateComponent } from './update-collectionconcepts.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CollectionConceptsUpdateComponent],
  imports: [
    CommonModule,
    CollectionConceptsRoutingModule,
    SharedModule
  ]
})

export class CollectionConceptsUpdateModule { }