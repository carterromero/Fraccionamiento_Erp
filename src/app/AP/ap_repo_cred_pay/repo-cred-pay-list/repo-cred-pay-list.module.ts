import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoCredPayListRoutingModule } from './repo-cred-pay-list-routing.module';
import { RepoCredPayListComponent } from './repo-cred-pay-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [RepoCredPayListComponent],
  imports: [
    CommonModule,
    RepoCredPayListRoutingModule,
    SharedModule
  ]
})
export class RepoCredPayListModule { }