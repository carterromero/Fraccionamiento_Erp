import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageBanksListRoutingModule } from './manage-banks-list-routing.module';
import { ManageBanksListComponent } from './manage-banks-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ManageBanksListComponent],
  imports: [
    CommonModule,
    ManageBanksListRoutingModule,
    SharedModule
  ]
})
export class ManageBanksListModule { 



}