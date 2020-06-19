import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersListRoutingModule } from './transfers-list-routing.module';
import { TransfersListComponent } from './transfers-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [TransfersListComponent],
  imports: [
    CommonModule,
    TransfersListRoutingModule,
    SharedModule
  ]
})
export class TransfersListModule { 



}