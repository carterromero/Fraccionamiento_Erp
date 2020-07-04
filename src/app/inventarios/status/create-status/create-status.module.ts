import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CreateStatusComponent } from './create-status.component';
import { CreateStatusRoutingModule } from './create-status.routing.module';

@NgModule({
  declarations: [CreateStatusComponent],
  imports: [
    CommonModule,
    CreateStatusRoutingModule,
    SharedModule
  ]
})
export class CreateStatusModule { 



}