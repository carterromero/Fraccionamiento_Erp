import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { UpdateReleasesComponent } from './update-releases.component';
import { UpdateReleasesRoutingModule } from './update-releases-routing.module';

@NgModule({
  declarations: [UpdateReleasesComponent  ],
  imports: [
    CommonModule,
    UpdateReleasesRoutingModule,
    SharedModule
  ]
})
export class UpdateReleasesModule { }