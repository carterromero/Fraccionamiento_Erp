import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkplacesDetailsRoutingModule } from './workplaces-details-routing.module';
import { WorkplacesDetailsComponent } from './workplaces-details.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [WorkplacesDetailsComponent],
  imports: [
    CommonModule,
    WorkplacesDetailsRoutingModule,
    SharedModule
  ]
})
export class WorkplacesDetailsModule { }