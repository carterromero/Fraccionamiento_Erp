import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { RolListRoutingModule } from './rol-list-routing.module';
import { RolListComponent } from './rol-list.component';

@NgModule({
  declarations: [ RolListComponent ],
  imports: [
    CommonModule,
    RolListRoutingModule ,
    SharedModule
  ]
})
export class  RolListModule { }