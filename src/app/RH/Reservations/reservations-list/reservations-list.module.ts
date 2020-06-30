import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsListRoutingModule } from './reservations-list-routing.module';
import { ReservationsListComponent } from './reservations-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ReservationsListComponent],
  imports: [
    CommonModule,
    ReservationsListRoutingModule,
    SharedModule
  ]
})
export class ReservationsListModule { }