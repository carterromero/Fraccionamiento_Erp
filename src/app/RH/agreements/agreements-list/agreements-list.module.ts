import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreementsListRoutingModule } from './agreements-list-routing.module';
import { AgreementsListComponent } from './agreements-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [AgreementsListComponent],
  imports: [
    CommonModule,
    AgreementsListRoutingModule,
    SharedModule
  ]
})
export class AgreementsListModule { }