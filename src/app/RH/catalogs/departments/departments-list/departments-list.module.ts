import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsListRoutingModule } from './departments-list-routing.module';
import { DepartmentsListComponent } from './departments-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [DepartmentsListComponent],
  imports: [
    CommonModule,
    DepartmentsListRoutingModule,
    SharedModule
  ]
})
export class DepartmentsListModule { }