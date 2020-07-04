import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionDetailsRoutingModule } from './collection-details-routing.module';
import { CollectionDetailsComponent } from './collection-details.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [CollectionDetailsComponent],
  imports: [
    CommonModule,
    CollectionDetailsRoutingModule,
    SharedModule
  ]
})
export class CollectionDetailsModule { }