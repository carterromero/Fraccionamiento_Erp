import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionListRoutingModule } from './collection-list-routing.module';
import { CollectionListComponent } from './collection-list.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [CollectionListComponent],
  imports: [
    CommonModule,
    CollectionListRoutingModule,
    SharedModule
  ]
})
export class CollectionListModule { }