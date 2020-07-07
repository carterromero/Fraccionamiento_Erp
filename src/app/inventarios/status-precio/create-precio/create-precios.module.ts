import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CreatePreciosComponent } from './create-precios.component';
import { CreatePreciostRoutingModule } from './create-precios-routing.module';


@NgModule({
  declarations: [CreatePreciosComponent],
  imports: [
    CommonModule,
    CreatePreciostRoutingModule,
  
    SharedModule
  ]
})
export class CreatePreciosModule { 



}