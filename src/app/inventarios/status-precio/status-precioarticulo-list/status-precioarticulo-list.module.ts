import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {SharedModule} from '../../../theme/shared/shared.module';
import { StatusPrecioarticuloListComponent } from './status-precioarticulo-list.component';
import { StatusPrecioarticuloListRoutingModule } from './status-precioarticulo-list-routing.module';


@NgModule({
  declarations: [StatusPrecioarticuloListComponent],
  imports: [
    CommonModule,
    StatusPrecioarticuloListRoutingModule,
    SharedModule
  ]
})
export class    StatusPrecioarticuloListModule{ 



}