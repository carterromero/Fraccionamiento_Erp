import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalsListRoutingModule } from './journals-list-routing.module';
import { JournalsListComponent } from './journals-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [JournalsListComponent],
  imports: [
    CommonModule,
    JournalsListRoutingModule,
    SharedModule
  ]
})
export class JournalsListModule { }