import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEmployeeRoutingModule } from './create-employee-routing.module';
import { CreateEmployeeComponent } from './create-employee.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateEmployeeComponent],
  imports: [
    CommonModule,
    CreateEmployeeRoutingModule,
    SharedModule
  ]
})
export class CreateEmployeeModule { }