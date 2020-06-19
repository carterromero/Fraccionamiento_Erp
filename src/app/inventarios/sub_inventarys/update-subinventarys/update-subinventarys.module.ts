import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateSubinventarysRoutingModule } from './update-subinventarys-routing.module';
import { UpdateSubinventarysComponent } from './update-subinventarys.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [UpdateSubinventarysComponent],
  imports: [
    CommonModule,
    UpdateSubinventarysRoutingModule,
    SharedModule
  ]
})
export class UpdateSubCategoriesModule { }