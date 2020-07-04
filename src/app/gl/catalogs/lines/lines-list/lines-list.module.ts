import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinesListRoutingModule } from './lines-list-routing.module';
import { LinesListComponent } from './lines-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [LinesListComponent],
  imports: [
    CommonModule,
    LinesListRoutingModule,
    SharedModule
  ]
})
export class LinesListModule { }