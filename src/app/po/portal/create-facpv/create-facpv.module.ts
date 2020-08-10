import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';

import { CreateFacpvComponent } from './create-facpv.component';
import { CreateFacpvRoutingModule } from './create-facpv-routing.module';

@NgModule({
  declarations: [CreateFacpvComponent],


  imports: [
    CommonModule,
    CreateFacpvRoutingModule,
 
    
    SharedModule
  ]
})
export class CreateFacpvModule { }