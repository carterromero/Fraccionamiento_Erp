import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateReservationsRoutingModule } from './update-reservations-routing.module';
import { UpdateReservationsComponent } from './update-reservations.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [UpdateReservationsComponent],
  imports: [
    CommonModule,
    UpdateReservationsRoutingModule,
    SharedModule
  ]
})
export class UpdateReservationsModule { }