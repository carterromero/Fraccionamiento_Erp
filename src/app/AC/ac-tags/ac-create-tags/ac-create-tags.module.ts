import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcCreateTagsRoutingModule } from './ac-create-tags-routing.module';
import { AcCreateTagsComponent } from './ac-create-tags.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [ AcCreateTagsComponent ],
  imports: [
    CommonModule,
    AcCreateTagsRoutingModule,
    SharedModule
  ]
})
export class AcCreateTagsModule { }
