import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamaraListRoutingModule } from './camara-list-routing.module';
import { CamaraListComponent } from './camara-list.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { EmbedVideo } from 'ngx-embed-video';


@NgModule({
  declarations: [CamaraListComponent],
  imports: [
    CommonModule,
    CamaraListRoutingModule,
    SharedModule,
    EmbedVideo
  ]
})
export class CamaraListModule { }
