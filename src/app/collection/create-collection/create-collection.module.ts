import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { createcollectionRoutingModule } from './create-collection-routing.modules';
import { CreatecollectionComponent } from './create-collection.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreatecollectionComponent],
  imports: [
    CommonModule,
    createcollectionRoutingModule,
    SharedModule
  ]
})
export class createcollectionModule { }