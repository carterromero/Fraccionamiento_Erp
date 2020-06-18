import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { UserDetailsComponent } from './user-details.component';
import { UserDetailsRoutingModule } from './user-details-routing.module';




@NgModule({
  declarations: [UserDetailsComponent  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    SharedModule
  ]
})
export class UserDetailsModule { }