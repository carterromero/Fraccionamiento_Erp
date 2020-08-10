import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CreateEntrysComponent } from './create-entrys.component';
import { CreateEntrysRoutingModule } from './create-entrys.routing.module';

@NgModule({
  declarations: [CreateEntrysComponent],
  imports: [
    CommonModule,
    CreateEntrysRoutingModule,   
    SharedModule
  ]
})
export class CreateEntrysModule{



  
 }

