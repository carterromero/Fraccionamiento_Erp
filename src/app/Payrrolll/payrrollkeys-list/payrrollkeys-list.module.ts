import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { PayrrollkeysListRoutingModule } from './payrrollkeys-routing.module';
import { PayrrollkeysListComponent } from './payrrollkeys-list.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [PayrrollkeysListComponent],
  imports: [
    CommonModule,
    PayrrollkeysListRoutingModule,
    SharedModule
  ]
})
export class PayrrollkeysListModule { 



}