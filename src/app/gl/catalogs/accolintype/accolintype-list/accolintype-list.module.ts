import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccolintypeListRoutingModule } from './accolintype-list-routing.module';
import { AccolintypeListComponent } from './accolintype-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [AccolintypeListComponent],
  imports: [
    CommonModule,
    AccolintypeListRoutingModule,
    SharedModule
  ]
})
export class AccolintypeListModule { }