import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionConceptsRoutingModule } from './create-collection-concepts-routing.module';
import { CollectionConceptsCreateComponent } from './create-collectionconcepts.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CollectionConceptsCreateComponent],
  imports: [
    CommonModule,
    CollectionConceptsRoutingModule,
    SharedModule
  ]
})
export class CollectionConceptsCreateModule { }