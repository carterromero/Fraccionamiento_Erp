import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcVisitorsListRoutingModule } from './ac-visitors-list-routing.module';
import { AcVisitorsListComponent } from './ac-visitors-list.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcVisitorsListComponent],
  imports: [
    CommonModule,
    AcVisitorsListRoutingModule,
    SharedModule
  ]
})
export class AcVisitorsListModule { }
