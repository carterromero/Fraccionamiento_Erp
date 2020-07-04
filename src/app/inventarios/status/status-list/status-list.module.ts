import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from 'src/app/theme/shared/shared.module';
import { StatusListComponent } from './status-list.component';
import { StatusListRoutingModule } from './status-list-routing.module';
;

@NgModule({
  declarations: [StatusListComponent],
  imports: [
    CommonModule,
    StatusListRoutingModule,
    SharedModule
  ]
})
export class StatusListModule { }