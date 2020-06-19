import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';


import { UpdateTransfersComponent } from './update-transfers.component';
import { TransfersUpdateRoutingModule } from './transfers-update-routing.module';

@NgModule({
  declarations: [UpdateTransfersComponent],
  imports: [
    CommonModule,
    TransfersUpdateRoutingModule,
  

    SharedModule
  ]
})
export class TransfersUpdateModule { 



}