import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralListRoutingModule } from './general-list-routing.module';
import { GeneralListComponent } from './general-list.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [GeneralListComponent],
  imports: [
    CommonModule,
    GeneralListRoutingModule,
    SharedModule
  ]
})
export class GeneralListModule { }