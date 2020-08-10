import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcUpdateTenantsRoutingModule } from './ac-update-tenants-routing.module';
import { AcUpdateTenantsComponent } from './ac-update-tenants.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcUpdateTenantsComponent],
  imports: [
    CommonModule,
    AcUpdateTenantsRoutingModule,
    SharedModule
  ]
})
export class AcUpdateTenantsModule { }
