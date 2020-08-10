import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateContactsRoutingModule } from './update-contacts-routing.module';
import { UpdateContactsComponent } from './update-contacts.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [UpdateContactsComponent],
  imports: [
    CommonModule,
    UpdateContactsRoutingModule,
    SharedModule
  ]
})
export class UpdateContactsModule { }