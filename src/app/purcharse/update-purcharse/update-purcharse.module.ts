import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePurchaseRoutingModule } from './update-purcharse-routing.module';
import { UpdateCondominumsComponent } from 'src/app/admin/condominus/update-condominums/update-condominums.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UpdatePurcharseComponent } from './update-purcharse.component';

@NgModule({
  declarations: [UpdatePurcharseComponent],
  imports: [
    CommonModule,
    UpdatePurchaseRoutingModule,
    SharedModule
  ]
})
export class UpdatePurcharseModule { }