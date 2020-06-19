import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategoriesDetailsRoutingModule } from './subcategories-details-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SubcategoriesDetailsComponent } from './subcategories-details.component';

@NgModule({
  declarations: [SubcategoriesDetailsComponent],
  imports: [
    CommonModule,
    SubCategoriesDetailsRoutingModule,
    SharedModule
  ]
})
export class SubCategoriesDetailsModule { }