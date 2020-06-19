import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TransfersCreateRoutingModule } from './transfers-create-routing.module';
import { CreateTransfersComponent } from './create-transfers.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateTransfersComponent],
  imports: [
    CommonModule,
    TransfersCreateRoutingModule,
    SharedModule
  ]
})
export class TransfersCreateModule { 



}