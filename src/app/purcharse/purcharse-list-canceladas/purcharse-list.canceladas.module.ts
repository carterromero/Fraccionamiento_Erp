import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/theme/shared/shared.module';


import { Purcharse } from 'src/app/purcharse';

import { PurcharseListCanceladasRoutingModule } from './purcharse-list-canceladas.routing.module';
import { PurcharseListCanceladasComponent } from './purcharse-list-canceladas.component';

@NgModule({
  declarations: [PurcharseListCanceladasComponent],


  imports: [
    CommonModule,
    PurcharseListCanceladasRoutingModule,
 
 
    
    SharedModule
  ]
})
export class PurcharseListCanceladasModule { }