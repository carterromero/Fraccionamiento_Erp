import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsDetailsComponent} from './contacts-details.component';

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