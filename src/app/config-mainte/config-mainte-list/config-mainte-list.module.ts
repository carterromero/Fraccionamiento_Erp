import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ConfigmainteListRoutingModule } from './config-mainte-list-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import { ConfigMainteListComponent } from './config-mainte-list.component';

@NgModule({
  declarations: [ConfigMainteListComponent],
  imports: [
    CommonModule,
    ConfigmainteListRoutingModule,
    SharedModule
  ]
})
export class ConfigmainteListModule { }