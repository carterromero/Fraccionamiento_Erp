import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateArticlesRoutingModule } from './create-articles-routing.module';
import { CreateArticlesComponent } from './create-articles.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CreateArticlesComponent],
  imports: [
    CommonModule,
    CreateArticlesRoutingModule,
    SharedModule
  ]
})
export class CreateArticlesModule { }