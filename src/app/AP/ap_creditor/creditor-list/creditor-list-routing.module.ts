import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditorListComponent} from './creditor-list.component';

const routes: Routes = [
  {
    path: '',
    component: CreditorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditorListRoutingModule { }