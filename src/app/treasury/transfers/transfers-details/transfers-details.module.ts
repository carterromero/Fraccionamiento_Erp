import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TransfersDetailsRoutingModule } from '../transfers-details/transfers-details-routing.module';
import { TransfersDetailsComponent } from '../transfers-details/transfers-details.component';

@NgModule({
  declarations: [TransfersDetailsComponent],
  imports: [
    CommonModule,
    TransfersDetailsRoutingModule,
    SharedModule
  ]
})
export class TransfersDetailsModule { 



}