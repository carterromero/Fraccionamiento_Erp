import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesDetailsRoutingModule } from './categories_details-routing.module';
import { CategoriesDetailsComponent } from './categories-details.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [CategoriesDetailsComponent],
  imports: [
    CommonModule,
    CategoriesDetailsRoutingModule,
    SharedModule
  ]
})
export class CategoriesDetailsModule { }