import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateWorkplacesRoutingModule } from './create-workplaces-routing.module';
import { CreateWorkplacesComponent } from './create-workplaces.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateWorkplacesComponent],
  imports: [
    CommonModule,
    CreateWorkplacesRoutingModule,
    SharedModule
  ]
})
export class CreateWorkplacesModule { }