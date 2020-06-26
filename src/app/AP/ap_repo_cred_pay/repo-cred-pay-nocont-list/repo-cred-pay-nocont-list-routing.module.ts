import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoCredPayNocontListComponent} from './repo-cred-pay-nocont-list.component';

const routes: Routes = [
  {
    path: '',
    component: RepoCredPayNocontListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoCredPayNocontListRoutingModule { }
