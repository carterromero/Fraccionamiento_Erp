import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacpvListComponent } from './facpv-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { FacpvListRoutingModule } from './facpv-list-routing.module';

@NgModule({
  declarations: [FacpvListComponent],
  imports: [
    CommonModule,
    FacpvListRoutingModule,
    SharedModule
  ]
})
export class FacpvListModule { 



}