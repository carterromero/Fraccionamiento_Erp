import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEntrysRoutingModule } from './create-entrys-routing.module';
import { CreateEntrysComponent } from './create-entrys.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
//import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateEntrysComponent],
  imports: [
    CommonModule,
    CreateEntrysRoutingModule,
    SharedModule
  ]
})
export class CreateEntrysModule { }