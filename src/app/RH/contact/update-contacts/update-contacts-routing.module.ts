import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateContactsComponent} from './update-contacts.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateContactsRoutingModule { }