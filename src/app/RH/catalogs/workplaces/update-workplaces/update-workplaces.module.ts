import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateWorkplacesRoutingModule } from './update-workplaces-routing.module';
import { UpdateWorkplacesComponent } from './update-workplaces.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateWorkplacesComponent],
  imports: [
    CommonModule,
    UpdateWorkplacesRoutingModule,
    SharedModule
  ]
})
export class UpdateWorkplacesModule { }