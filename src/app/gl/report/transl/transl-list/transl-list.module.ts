import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslListRoutingModule } from './transl-list-routing.module';
import { TranslListComponent } from './transl-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [TranslListComponent],
  imports: [
    CommonModule,
    TranslListRoutingModule,
    SharedModule
  ]
})
export class TranslListModule { }