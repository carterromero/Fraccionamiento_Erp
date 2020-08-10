import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateContactsRoutingModule } from './create-contacts-routing.module';
import { CreateContactsComponent } from 'src/app/RH/contact/create-contacts/create-contacts.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateContactsComponent],
  imports: [
    CommonModule,
    CreateContactsRoutingModule,
    SharedModule
  ]
})
export class CreateContactsModule { }