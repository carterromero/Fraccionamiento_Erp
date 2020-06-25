import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoCredPayVencontListRoutingModule } from './repo-cred-pay-vencont-list-routing.module';
import { RepoCredPayVencontListComponent } from './repo-cred-pay-vencont-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [RepoCredPayVencontListComponent],
  imports: [
    CommonModule,
    RepoCredPayVencontListRoutingModule,
    SharedModule
  ]
})
export class RepoCredPayVencontListModule { }