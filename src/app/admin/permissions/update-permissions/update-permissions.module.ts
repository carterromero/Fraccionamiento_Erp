
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { UpdatePermissionsRoutingModule } from './update-permissions-routing.module';
import { UpdatePermissionsComponent } from './update-permissions.component';


@NgModule({
  declarations: [UpdatePermissionsComponent  ],
  imports: [
    CommonModule,
    UpdatePermissionsRoutingModule,
    SharedModule
  ]
})
export class  UpdatePermissionsModule { }