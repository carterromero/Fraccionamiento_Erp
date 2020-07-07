import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UpdatePrecioRoutingModule } from './update-precio.routing.module';
import { UpdatePrecioComponent } from './update-precio.component';




@NgModule({
  declarations: [UpdatePrecioComponent],
  imports: [
    CommonModule,
    UpdatePrecioRoutingModule,
  

    SharedModule
  ]
})
export class UpdatePrecioModule { 



}