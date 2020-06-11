import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditorDetailsComponent} from './creditor-details.component';

const routes: Routes = [
  {
    path: '',
    component: CreditorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditorDetailsRoutingModule { }