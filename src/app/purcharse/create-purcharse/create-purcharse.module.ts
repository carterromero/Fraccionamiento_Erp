import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';

import { CreatePurcharseComponent } from './create-purcharse.component';
import { PurcharseCreateRoutingModule } from './create-purcharse-routing.module';

@NgModule({
  declarations: [CreatePurcharseComponent],


  imports: [
    CommonModule,
    PurcharseCreateRoutingModule,
 
    
    SharedModule
  ]
})
export class PurcharseCreateModule { }