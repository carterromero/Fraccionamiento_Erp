import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';

import { PrecioDetailsComponent } from './precio-details.component';
import { StatusDetailsRoutingModule } from '../../status/status-details/status-details.routing.module';


@NgModule({
  declarations: [PrecioDetailsComponent],
  imports: [
    CommonModule,
    StatusDetailsRoutingModule,
    SharedModule
  ]
})
export class PrecioDetailsModule { 



}