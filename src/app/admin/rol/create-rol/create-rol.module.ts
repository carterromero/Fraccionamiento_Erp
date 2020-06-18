import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRolRoutingModule } from './create-rol-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';
import { CreateRolComponent } from './create-rol.component';

@NgModule({
  declarations: [CreateRolComponent  ],
  imports: [
    CommonModule,
    CreateRolRoutingModule,
    SharedModule
  ]
})
export class CreateRolModule { }