import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantsListRoutingModule } from './tenants-list-routing.module';
import { TenantsListComponent } from './tenants-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [TenantsListComponent],
  imports: [
    CommonModule,
    TenantsListRoutingModule,
    SharedModule
  ]
})
export class TenantsListModule { }