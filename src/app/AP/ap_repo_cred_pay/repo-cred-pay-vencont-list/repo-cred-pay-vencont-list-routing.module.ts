import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoCredPayVencontListComponent} from './repo-cred-pay-vencont-list.component';

const routes: Routes = [
  {
    path: '',
    component: RepoCredPayVencontListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoCredPayVencontListRoutingModule { }
