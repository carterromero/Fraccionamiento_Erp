import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { UserdashboardDetailsComponent } from './userdashboard-details.component';
import { UserdashboardRoutingModule } from './userdashboard-details-routing.module';


@NgModule({
  declarations: [UserdashboardDetailsComponent  ],
  imports: [
    CommonModule,
    UserdashboardRoutingModule,
    SharedModule
  ]
})
export class  UserdashboardModule { }