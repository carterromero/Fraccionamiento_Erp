import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcTagsDetailsRoutingModule } from './ac-tags-details-routing.module';
import { AcTagsDetailsComponent } from './ac-tags-details.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcTagsDetailsComponent],
  imports: [
    CommonModule,
    AcTagsDetailsRoutingModule,
    SharedModule
  ]
})
export class AcTagsDetailsModule { }
