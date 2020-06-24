import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateDepartmentsRoutingModule } from './update-departments-routing.module';
import { UpdateDepartmentsComponent } from './update-departments.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateDepartmentsComponent],
  imports: [
    CommonModule,
    UpdateDepartmentsRoutingModule,
    SharedModule
  ]
})
export class UpdateDepartmentsModule { }