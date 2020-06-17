import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';

@NgModule({
  declarations: [UserListComponent  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    SharedModule
  ]
})
export class UserListModule { }