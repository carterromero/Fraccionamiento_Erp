import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsDetailsRoutingModule } from './contacts-details-routing.module'
import { ContactsDetailsComponent } from './contacts-details.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';
@NgModule({
  declarations: [ContactsDetailsComponent],
  imports: [
    CommonModule,
    ContactsDetailsRoutingModule,
    SharedModule
  ]
})
export class ContactsDetailModule { }