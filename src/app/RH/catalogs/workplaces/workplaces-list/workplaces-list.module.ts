import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkplacesListRoutingModule } from './workplaces-list-routing.module';
import { WorkplacesListComponent } from './workplaces-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [WorkplacesListComponent],
  imports: [
    CommonModule,
    WorkplacesListRoutingModule,
    SharedModule
  ]
})
export class WorkplacesListModule { }