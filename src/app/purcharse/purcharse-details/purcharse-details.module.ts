import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { PurcharseDetailsRoutingModule } from './purcharse-details-routing.module ';
import { PurcharseDetailsComponent } from './purcharse-details.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [  PurcharseDetailsComponent],
  imports: [
    CommonModule,
 PurcharseDetailsRoutingModule,
    
  

    SharedModule
  ]
})
export class PurcharseDetailsModule { 



}