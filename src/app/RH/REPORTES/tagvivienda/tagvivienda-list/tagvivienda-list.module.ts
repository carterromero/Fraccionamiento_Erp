import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagviviendaListRoutingModule } from './tagvivienda-list-routing.module';
import { TagviviendaListComponent } from './tagvivienda-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [TagviviendaListComponent],
  imports: [
    CommonModule,
    TagviviendaListRoutingModule,
    SharedModule
  ]
})
export class TagviviendaListModule { }