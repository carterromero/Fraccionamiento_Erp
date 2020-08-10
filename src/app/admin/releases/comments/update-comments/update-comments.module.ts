import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCommentsRoutingModule } from './update-comments-routing.module';
import { UpdateCommentsComponent } from './update-comments.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [UpdateCommentsComponent],
  imports: [
    CommonModule,
    UpdateCommentsRoutingModule,
    SharedModule
  ]
})
export class UpdateCommentsModule { }