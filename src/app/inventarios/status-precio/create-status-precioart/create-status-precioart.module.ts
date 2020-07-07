import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {SharedModule} from '../../../theme/shared/shared.module';
import { CreateStatusPrecioartComponent } from './create-status-precioart.component';


@NgModule({
  declarations: [CreateStatusPrecioartComponent],
  imports: [
    CommonModule,
    CreateStatusPrecioartModule,
    SharedModule
  ]
})
export class    CreateStatusPrecioartModule{ 



}