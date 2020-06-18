
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../../theme/shared/shared.module';
import { PermissionsListComponent } from './permissions-list.component';
import { PermissionsListRoutingModule } from './permissions-list-routing.module';




@NgModule({
  declarations: [PermissionsListComponent  ],
  imports: [
    CommonModule,
    PermissionsListRoutingModule,
    SharedModule
  ]
})
export class  PermissionsListModule { }