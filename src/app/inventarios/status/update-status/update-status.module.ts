import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UpdateStatusRoutingModule } from './update-status.routing.module';
import { UpdateStatusComponent } from './update-status.component';



@NgModule({
  declarations: [UpdateStatusComponent],
  imports: [
    CommonModule,
    UpdateStatusRoutingModule,
  

    SharedModule
  ]
})
export class UpdateStatusModule { 



}