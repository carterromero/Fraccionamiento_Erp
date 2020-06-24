import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTenantsRoutingModule } from './create-tenants-routing.module';
import { CreateTenantsComponent } from './create-tenants.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateTenantsComponent],
  imports: [
    CommonModule,
    CreateTenantsRoutingModule,
    SharedModule
  ]
})
export class CreateTenantsModule { }