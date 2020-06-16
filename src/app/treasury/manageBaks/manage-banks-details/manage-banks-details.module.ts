import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ManageBanksDetailsRoutingModule } from '../manage-banks-details/manage-banks-details-routing.module';
import { ManageBanksDetailsComponent } from '../manage-banks-details/manage-banks-details.component';

@NgModule({
  declarations: [ManageBanksDetailsComponent],
  imports: [
    CommonModule,
    ManageBanksDetailsRoutingModule,
    SharedModule
  ]
})
export class ManageBanksDetailsModule { 



}