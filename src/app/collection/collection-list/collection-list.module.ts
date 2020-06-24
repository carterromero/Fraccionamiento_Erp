import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { collectionListRoutingModule } from './collection-list-routing.module';
import { collectionListComponent } from './collection-list.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [collectionListComponent],
  imports: [
    CommonModule,
    collectionListRoutingModule,
    SharedModule
  ]
})
export class collectionListModule { }