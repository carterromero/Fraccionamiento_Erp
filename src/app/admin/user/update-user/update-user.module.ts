import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserRoutingModule } from './update-user-routing.module';



@NgModule({
  declarations: [UpdateUserComponent  ],
  imports: [
    CommonModule,
    UpdateUserRoutingModule,
    SharedModule
  ]
})
export class UpdateUserModule { }