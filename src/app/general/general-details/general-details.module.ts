import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GeneralDetailsRoutingModule } from './general-details-routing.module';
import { GeneralDetailsComponent } from './general-details.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [GeneralDetailsComponent],
  
  imports: [
    CommonModule,
    GeneralDetailsRoutingModule,
    SharedModule
  ]
})
export class GeneralDetailsModule { }