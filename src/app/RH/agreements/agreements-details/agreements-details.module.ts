import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreementsDetailsRoutingModule } from './agreements-details-routing.module';
import { AgreementsDetailsComponent } from './agreements-details.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [AgreementsDetailsComponent],
  imports: [
    CommonModule,
    AgreementsDetailsRoutingModule,
    SharedModule
  ]
})
export class AgreementsDetailsModule { }