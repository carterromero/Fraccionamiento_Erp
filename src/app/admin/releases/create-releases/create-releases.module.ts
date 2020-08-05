import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateReleasesRoutingModule } from './create-releases-routing.module';
import { CreateReleasesComponent } from './create-releases.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateReleasesComponent],
  imports: [
    CommonModule,
    CreateReleasesRoutingModule,
    SharedModule
  ]
})
export class CreateReleasesModule { }