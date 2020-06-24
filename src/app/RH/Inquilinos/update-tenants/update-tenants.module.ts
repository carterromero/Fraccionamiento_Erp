import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateTenantsRoutingModule } from './update-tenants-routing.module';
import { UpdateTenantsComponent } from './update-tenants.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [UpdateTenantsComponent],
  imports: [
    CommonModule,
    UpdateTenantsRoutingModule,
    SharedModule
  ]
})
export class UpdateTenantsModule { }