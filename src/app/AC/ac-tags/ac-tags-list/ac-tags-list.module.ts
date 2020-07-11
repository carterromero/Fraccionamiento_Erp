import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcTagsListRoutingModule } from './ac-tags-list-routing.module';
import { AcTagsListComponent } from './ac-tags-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcTagsListComponent],
  imports: [
    CommonModule,
    AcTagsListRoutingModule,
    SharedModule
  ]
})
export class AcTagsListModule { }
