import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateReservationsRoutingModule } from './create-reservations-routing.module';
import { CreateReservationsComponent } from './create-reservations.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; 


FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin
]);

@NgModule({
  declarations: [CreateReservationsComponent],
  imports: [
    CommonModule,
    CreateReservationsRoutingModule,
    SharedModule,
    FullCalendarModule
  ]
})
export class CreateReservationsModule { }