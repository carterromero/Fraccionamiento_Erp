import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcTenantsListRoutingModule } from './ac-tenants-list-routing.module';
import { AcTenantsListComponent } from './ac-tenants-list.component';

import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcTenantsListComponent ],
  imports: [
    CommonModule,
    AcTenantsListRoutingModule,
    SharedModule
  ]
})
export class AcTenantsListModule { }
