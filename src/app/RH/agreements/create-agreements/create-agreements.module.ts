import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAgreementsRoutingModule } from './create-agreements-routing.module';
import { CreateAgreementsComponent } from './create-agreements.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateAgreementsComponent],
  imports: [
    CommonModule,
    CreateAgreementsRoutingModule,
    SharedModule
  ]
})
export class CreateAgreementsModule { }