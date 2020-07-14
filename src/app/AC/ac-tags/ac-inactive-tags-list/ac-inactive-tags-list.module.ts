import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcInactiveTagsListRoutingModule } from './ac-inactive-tags-list-routing.module';
import { AcInactiveTagsListComponent } from './ac-inactive-tags-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcInactiveTagsListComponent],
  imports: [
    CommonModule,
    AcInactiveTagsListRoutingModule,
    SharedModule
  ]
})
export class AcInactiveTagsListModule { }
