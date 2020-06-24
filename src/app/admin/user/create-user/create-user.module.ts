import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { CreateUserComponent } from './create-user.component';
import { CreateUserRoutingModule } from './create-user-routing.module';


@NgModule({
  declarations: [CreateUserComponent  ],
  imports: [
    CommonModule,
    CreateUserRoutingModule,
    SharedModule
  ]
})
export class CreateUserModule { }