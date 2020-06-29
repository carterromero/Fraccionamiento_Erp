import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesDetailsRoutingModule } from './articles-details-routing.module';
import { ArticlesDetailsComponent } from './articles-details.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ArticlesDetailsComponent],
  imports: [
    CommonModule,
    ArticlesDetailsRoutingModule,
    SharedModule
  ]
})
export class ArticlesDetailsModule { }