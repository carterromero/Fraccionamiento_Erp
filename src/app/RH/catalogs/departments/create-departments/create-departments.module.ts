import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDepartmentsRoutingModule } from './create-departments-routing.module';
import { CreateDepartmentsComponent } from './create-departments.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateDepartmentsComponent],
  imports: [
    CommonModule,
    CreateDepartmentsRoutingModule,
    SharedModule
  ]
})
export class CreateDepartmentsModule { }