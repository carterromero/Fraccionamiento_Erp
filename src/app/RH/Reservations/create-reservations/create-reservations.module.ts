import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateReservationsRoutingModule } from './create-reservations-routing.module';
import { CreateReservationsComponent } from './create-reservations.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateReservationsComponent],
  imports: [
    CommonModule,
    CreateReservationsRoutingModule,
    SharedModule
  ]
})
export class CreateReservationsModule { }