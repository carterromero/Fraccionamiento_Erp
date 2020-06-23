import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { UpdateUserdashboardComponent } from './update-userdashboard.component';
import { UpdateUserdashboardRoutingModule } from './update-userdashboard-routing.module';

@NgModule({
  declarations: [UpdateUserdashboardComponent  ],
  imports: [
    CommonModule,
    UpdateUserdashboardRoutingModule,
    SharedModule
  ]
})
export class  UpdateUserdashboardModule { }