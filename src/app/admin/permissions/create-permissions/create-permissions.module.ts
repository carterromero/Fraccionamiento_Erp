import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../../theme/shared/shared.module';
import { CreatePermissionsComponent } from './create-permissions.component';
import { CreatePermissionsRoutingModule } from './create-permissions-routing.module';


@NgModule({
  declarations: [CreatePermissionsComponent  ],
  imports: [
    CommonModule,
    CreatePermissionsRoutingModule,
    SharedModule
  ]
})
export class  CreatePermissionsModule { }