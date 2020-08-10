import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCollectionRoutingModule } from './update-collection-routing.module';
import { UpdateCollectionComponent } from './update-collection.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateCollectionComponent],
  imports: [
    CommonModule,
    UpdateCollectionRoutingModule,
    SharedModule
  ]
})

export class UpdateCollectionModule { }