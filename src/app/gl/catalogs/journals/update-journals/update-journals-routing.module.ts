import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateJournalsComponent} from './update-journals.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateJournalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateJournalsRoutingModule { }