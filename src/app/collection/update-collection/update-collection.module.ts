import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatecollectionRoutingModule } from './update-collection-routing.module';
import { UpdatecollectionComponent } from './update-collection.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdatecollectionComponent],
  imports: [
    CommonModule,
    UpdatecollectionRoutingModule,
    SharedModule
  ]
})

export class UpdatecollectionModule { }