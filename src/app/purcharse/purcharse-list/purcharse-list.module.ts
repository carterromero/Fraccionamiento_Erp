import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';


import { Purcharse } from 'src/app/purcharse';
import { PurcharseListRoutingModule } from './purcharse-list-routing.module';
import { PurcharseListComponent } from './purcharse-list.component';

@NgModule({
  declarations: [ PurcharseListComponent],


  imports: [
    CommonModule,
    PurcharseListRoutingModule,
 
 
    
    SharedModule
  ]
})
export class PurcharseListModule { }