import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { UserdashboardListComponent } from './userdashboard-list.component';
import { UserdashboardListRoutingModule } from './userdashboard-list-routing.module';

@NgModule({
  declarations: [UserdashboardListComponent  ],
  imports: [
    CommonModule,
    UserdashboardListRoutingModule,
    SharedModule
  ]
})
export class  UserdashboardListModule { }