import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSubcategoriesRoutingModule } from './create-subcategories-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CreateSubcategoriesComponent } from './create-subcategories.component';

@NgModule({
  declarations: [CreateSubcategoriesComponent],
  imports: [
    CommonModule,
    CreateSubcategoriesRoutingModule,
    SharedModule
  ]
})
export class CreateSubcategoriesModule { }