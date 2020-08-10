import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalslinListRoutingModule } from './journalslin-list-routing.module';
import { JournalslinListComponent } from './journalslin-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [JournalslinListComponent],
  imports: [
    CommonModule,
    JournalslinListRoutingModule,
    SharedModule
  ]
})
export class JournalslinListModule { }