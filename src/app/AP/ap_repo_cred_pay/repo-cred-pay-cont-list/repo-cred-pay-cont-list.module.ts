import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoCredPayContListRoutingModule } from './repo-cred-pay-cont-list-routing.module';
import { RepoCredPayContListComponent } from './repo-cred-pay-cont-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [RepoCredPayContListComponent],
  imports: [
    CommonModule,
    RepoCredPayContListRoutingModule,
    SharedModule
  ]
})
export class RepoCredPayContListModule { }