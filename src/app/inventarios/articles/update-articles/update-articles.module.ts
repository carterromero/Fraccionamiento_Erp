import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateArticlesComponent } from './update-articles.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UpdateArticlesRoutingModule } from './update-articles-routing.module';


@NgModule({
  declarations: [UpdateArticlesComponent],
  imports: [
    CommonModule,
    UpdateArticlesRoutingModule,
    SharedModule
  ]
})
export class UpdateArticlesModule { }