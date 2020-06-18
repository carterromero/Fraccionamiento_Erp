import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategoriesListRoutingModule } from './subcategories-list-routing.module';
import { SubCategoriesListComponent } from './subcategories-list.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [SubCategoriesListComponent],
  imports: [
    CommonModule,
    SubCategoriesListRoutingModule,
    SharedModule
  ]
})
export class SubCategoriesListModule { }