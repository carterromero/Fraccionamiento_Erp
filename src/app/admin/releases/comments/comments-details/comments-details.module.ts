import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsDetailsRoutingModule } from './comments-details-routing.module'
import { CommentsDetailsComponent } from './comments-details.component'
import {SharedModule} from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [CommentsDetailsComponent],
  imports: [


                         
    CommonModule,
    CommentsDetailsRoutingModule,
    SharedModule                 
  ]
})
export class CommentsDetailsModule { }