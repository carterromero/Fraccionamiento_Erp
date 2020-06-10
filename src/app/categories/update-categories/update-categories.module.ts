import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCategoriesRoutingModule } from './update-categories-routing.module';
import { UpdateCategoriesComponent } from './update-categories.component';
import {SharedModule} from '../../theme/shared/shared.module';

@NgModule({
  declarations: [UpdateCategoriesComponent],
  imports: [
    CommonModule,
    UpdateCategoriesRoutingModule,
    SharedModule
  ]
})

export class UpdateCategoriesModule { }