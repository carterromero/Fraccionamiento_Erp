import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRListRoutingModule } from './departmentsr-list-routing.module';
import { DepartmentsRListComponent } from './departmentsr-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [DepartmentsRListComponent],
  imports: [
    CommonModule,
    DepartmentsRListRoutingModule,
    SharedModule
  ]
})
export class DepartmentsRListModule { }