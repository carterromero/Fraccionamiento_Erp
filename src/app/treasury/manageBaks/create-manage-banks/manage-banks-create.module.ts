import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ManageBanksCreateRoutingModule } from './manage-banks-create-routing.module';
import { CreateManageBanksComponent } from './create-manage-banks.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateManageBanksComponent],
  imports: [
    CommonModule,
    ManageBanksCreateRoutingModule,
    SharedModule
  ]
})
export class ManageBanksCreateModule { 



}