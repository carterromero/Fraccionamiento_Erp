import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CreateSalidasComponent } from './create-salidas.component';
import { CreateSalidasRoutingModule } from './create-salidas.routing.module';




@NgModule({
  declarations: [CreateSalidasComponent],
  imports: [
    CommonModule,
    CreateSalidasRoutingModule,   
    SharedModule
  ]
})
export class CreateSalidasModule {















  
 }

