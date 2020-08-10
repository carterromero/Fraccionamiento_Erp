import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { ReleasesListComponent } from './releases-list.component';
import { ReleasesListRoutingModule } from './releases-list-routing.module';

@NgModule({
  declarations: [ReleasesListComponent  ],
  imports: [
    CommonModule,
    ReleasesListRoutingModule,
    SharedModule
  ]
})
export class ReleasesListModule { }