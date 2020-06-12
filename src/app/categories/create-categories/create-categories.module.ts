import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCategoriesRoutingModule } from './create-categories-routing.module';
import { CreateCategoriesComponent } from './create-categories.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [CreateCategoriesComponent],
  imports: [
    CommonModule,
    CreateCategoriesRoutingModule,
    SharedModule
  ]
})
export class CreateCategoriesModule { }