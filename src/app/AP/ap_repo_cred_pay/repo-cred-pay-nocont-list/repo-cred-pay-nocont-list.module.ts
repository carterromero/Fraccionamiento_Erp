import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoCredPayNocontListRoutingModule } from './repo-cred-pay-nocont-list-routing.module';
import { RepoCredPayNocontListComponent } from './repo-cred-pay-nocont-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [RepoCredPayNocontListComponent],
  imports: [
    CommonModule,
    RepoCredPayNocontListRoutingModule,
    SharedModule
  ]
})
export class RepoCredPayNocontListModule { }