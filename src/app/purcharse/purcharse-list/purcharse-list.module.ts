import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PurcharseListComponent } from './purcharse-list.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { PurcharseListRoutingModule } from './purcharse-list-routing.module';

@NgModule({
  declarations: [PurcharseListComponent],
  imports: [
    CommonModule,
    PurcharseListRoutingModule,
    
    SharedModule
  ]
})
export class PurcharseListModule { }