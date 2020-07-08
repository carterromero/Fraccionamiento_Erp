import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateJournalsRoutingModule } from './create-journals-routing.module';
import { CreateJournalsComponent } from './create-journals.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateJournalsComponent],
  imports: [
    CommonModule,
    CreateJournalsRoutingModule,
    SharedModule
  ]
})
export class CreateJournalsModule { }
