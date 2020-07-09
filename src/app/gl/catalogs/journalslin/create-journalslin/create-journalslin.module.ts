import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateJournalslinRoutingModule } from './create-journalslin-routing.module';
import { CreateJournalslinComponent } from './create-journalslin.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateJournalslinComponent],
  imports: [
    CommonModule,
    CreateJournalslinRoutingModule,
    SharedModule
  ]
})
export class CreateJournalslinModule { }
