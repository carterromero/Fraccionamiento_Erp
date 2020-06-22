import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantsDetailsRoutingModule } from './tenants-details-routing.module';
import { TenantsDetailsComponent } from './tenants-details.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [TenantsDetailsComponent],
  imports: [
    CommonModule,
    TenantsDetailsRoutingModule,
    SharedModule
  ]
})
export class TenantsDetailsModule { }