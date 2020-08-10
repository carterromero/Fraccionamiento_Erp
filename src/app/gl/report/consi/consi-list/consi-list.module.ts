import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsiListRoutingModule } from './consi-list-routing.module';
import { ConsiListComponent } from './consi-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [ConsiListComponent],
  imports: [
    CommonModule,
    ConsiListRoutingModule,
    SharedModule
  ]
})
export class ConsiListModule { }