import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { UpdateRolComponent } from './update-rol.component';
import { UpdateRolRoutingModule } from './update-rol-routing.module';



@NgModule({
  declarations: [ UpdateRolComponent ],
  imports: [
    CommonModule,
    UpdateRolRoutingModule  ,
    SharedModule
  ]
})
export class  UpdateRolModule { }