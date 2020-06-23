import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesListRoutingModule } from './articles-list-routing.module';
import { ArticlesListComponent } from './articles-list.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ArticlesListComponent],
  imports: [
    CommonModule,
    ArticlesListRoutingModule,
    SharedModule
  ]
})
export class CreateArticlesListModule { }