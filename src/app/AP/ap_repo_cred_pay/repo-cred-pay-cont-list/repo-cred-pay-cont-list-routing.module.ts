import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoCredPayContListComponent} from './repo-cred-pay-cont-list.component';

const routes: Routes = [
  {
    path: '',
    component: RepoCredPayContListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoCredPayContListRoutingModule { }
