import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoCredPayListComponent} from './repo-cred-pay-list.component';

const routes: Routes = [
  {
    path: '',
    component: RepoCredPayListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoCredPayListRoutingModule { }
