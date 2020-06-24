
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../../theme/shared/shared.module';
import { PermissionsDetailsComponent } from './permissions-details.component';
import { PermissionsDetailsRoutingModule } from './permissions-details-routing.module';



@NgModule({
  declarations: [PermissionsDetailsComponent  ],
  imports: [
    CommonModule,
    PermissionsDetailsRoutingModule,
    SharedModule
  ]
})
export class  PermissionsDetailsModule { }