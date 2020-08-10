import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCommentsRoutingModule } from './create-comments-routing.module';
import { CreateCommentsComponent } from './create-comments.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateCommentsComponent],
  imports: [
    CommonModule,
    CreateCommentsRoutingModule,
    SharedModule
  ]
})
export class CreateCommentsModule { }