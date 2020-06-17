import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { RolDetailsComponent } from './rol-details.component';
import { RolDetailsRoutingModule } from './rol-details-routing.module';


@NgModule({
  declarations: [RolDetailsComponent ],
  imports: [
    CommonModule,
    RolDetailsRoutingModule ,
    SharedModule
  ]
})
export class  RolDetailsModule { }