import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsDetailsRoutingModule } from './departments-details-routing.module';
import { DepartmentsDetailsComponent } from './departments-details.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [DepartmentsDetailsComponent],
  imports: [
    CommonModule,
    DepartmentsDetailsRoutingModule,
    SharedModule
  ]
})
export class DepartmentsDetailsModule { }