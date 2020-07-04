import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsDetailsRoutingModule } from './reservations-details-routing.module';
import { ReservationsDetailsComponent } from './reservations-details.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ReservationsDetailsComponent],
  imports: [
    CommonModule,
    ReservationsDetailsRoutingModule,
    SharedModule
  ]
})
export class ReservationsDetailsModule { }