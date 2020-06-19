import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { CreateUserdashboardComponent } from './create-userdashboard.component';
import { CreateUserdashboardRoutingModule } from './create-userdashboard-routing.module';



@NgModule({
  declarations: [CreateUserdashboardComponent  ],
  imports: [
    CommonModule,
    CreateUserdashboardRoutingModule,
    SharedModule
  ]
})
export class  CreateUserdashboardModule { }