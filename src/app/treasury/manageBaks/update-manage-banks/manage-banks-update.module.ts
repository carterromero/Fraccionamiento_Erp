import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';


import { UpdateManageBanksComponent } from './update-manage-banks.component';
import { ManageBanksUpdateRoutingModule } from './manage-banks-update-routing.module';

@NgModule({
  declarations: [UpdateManageBanksComponent],
  imports: [
    CommonModule,
    ManageBanksUpdateRoutingModule,
  

    SharedModule
  ]
})
export class ManageBanksUpdateModule { 



}