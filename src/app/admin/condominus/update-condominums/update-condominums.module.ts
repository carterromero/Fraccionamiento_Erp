import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCondominumsRoutingModule } from './update-condominums-routing.module';
import { UpdateCondominumsComponent } from './update-condominums.component';
import { SharedModule } from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateCondominumsComponent],
  imports: [
    CommonModule,
    UpdateCondominumsRoutingModule,
    SharedModule
  ]
})
export class UpdateCondominumsModule { }