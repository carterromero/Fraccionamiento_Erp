import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoomRoutingModule } from './chat-room-routing.module';
import { ChatRoomComponent } from './chat-room.component';
import {SharedModule} from 'src/app/theme/shared/shared.module';
import {AsyncPipe} from '@angular/common';
//import {AngularFireMessangingModule} from '@angular/fire/messaging';

@NgModule({
  declarations: [ ChatRoomComponent],
  imports: [
    CommonModule,
    ChatRoomRoutingModule,
    SharedModule,
  ],
  providers: [AsyncPipe]
})
export class ChatRoomModule { }
