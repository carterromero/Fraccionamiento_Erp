import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCollectionRoutingModule } from './create-collection-routing.modules';
import { CreateCollectionComponent } from './create-collection.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateCollectionComponent],
  imports: [
    CommonModule,
    CreateCollectionRoutingModule,
    SharedModule
  ]
})
export class CreateCollectionModule { }