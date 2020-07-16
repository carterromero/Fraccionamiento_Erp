import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsDetailsComponent} from 'src/app/RH/contact/contacts-details/contacts-details.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsDetailsRoutingModule { }
