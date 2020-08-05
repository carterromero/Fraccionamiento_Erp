import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleasesDetailsRoutingModule } from './releases-details-routing.module'
import { ReleasesDetailsComponent } from './releases-details.component'
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ReleasesDetailsComponent],
  imports: [
    CommonModule,
    ReleasesDetailsRoutingModule,
    SharedModule
  ]
})
export class ReleasesDetailsModule { }