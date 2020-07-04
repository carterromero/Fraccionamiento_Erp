import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { StatusDetailsRoutingModule } from './status-details.routing.module';
import { StatusDetailsComponent } from './status-details.component';

@NgModule({
  declarations: [StatusDetailsComponent],
  imports: [
    CommonModule,
    StatusDetailsRoutingModule,
    SharedModule
  ]
})
export class StatusDetailsModule { 



}