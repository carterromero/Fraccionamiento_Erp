import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'; 
import { Mensaje } from './chat/interfaces/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  chat = [];
  currentMessage = new BehaviorSubject(null);
  constructor(private angularFireMessaging: AngularFireMessaging) {
    // this.angularFireMessaging.messaging.subscribe(
    //   (_messaging) => {
    //     _messaging.onMessage = _messaging.onMessage.bind(_messaging);
    //     _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
    //   }
    // )
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  receiveMessage() {
    // this.angularFireMessaging.messages.pipe(map(
    //   (payload) => {
    //     console.log("new message received. ", payload);
    //     this.currentMessage.next(payload);
    //     this.showCustomNotification(payload);
    //   }))
      this.angularFireMessaging.messages.subscribe(
        (payload) => {
          console.log("new message received. ", payload);
          
          this.currentMessage.next(payload);
          this.showCustomNotification(payload);

          // if(payload !== null){
          //   this.chat.push(JSON.parse(payload['data']['param']))
          //   localStorage.setItem('chats',JSON.stringify(this.chat));
          // }

          // let chatG = JSON.parse(payload['data']['param']);

          // this.chat = chatG;
          // console.log(this.chat);
        })
  }

  showCustomNotification(payload: any){
    let notify_data = payload['notification'];
    let title = notify_data['title'];
    let options = {
      body: notify_data['body'],
      icon: "./assets/images/logo_.png",
      badge: "./assets/images/logo.png",
      // image: "./assets/images/logo_.png",
    };
    console.log('Nuevo mensaje recibido. ',notify_data);
    let notify: Notification = new Notification(title,options);

    notify.onclick = event => {
      event.preventDefault();
      // window.location.href = '';
    }
  }

}
