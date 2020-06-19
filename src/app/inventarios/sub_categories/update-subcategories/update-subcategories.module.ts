import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateSubcategoriesComponent } from './update-subcategories.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UpdateSubCategoriesRoutingModule } from './update-subcategories-routing.module';


@NgModule({
  declarations: [UpdateSubcategoriesComponent],
  imports: [
    CommonModule,
    UpdateSubCategoriesRoutingModule,
    SharedModule
  ]
})
export class UpdateSubCategoriesModule { }