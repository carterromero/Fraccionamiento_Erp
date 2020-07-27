import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ChatService } from '../services/chat.service';
import { Mensaje } from '../interfaces/mensaje.interface';
import { MessagingService } from '../../messaging.service';
//import { Mensaje } from '../models/mensaje';
//import * as firebase from 'firebase';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  msgs = [];
  //   {
  //     user: 'Administrador',
  //     createdAt: 1554090856000,
  //     msg: 'Que haces?'
  //   },
  //   {
  //     user: 'Residente',
  //     createdAt: 1554090956000,
  //     msg: 'Estoy trabajando'
  //   },
  //   {
  //     user: 'Administrador',
  //     createdAt: 1554091056000,
  //     msg: 'Que bien!'
  //   }
  // ];
  currentUser = localStorage.getItem('id');
  mensaje: string = "";
  public chats: Mensaje[] = [];
  elemento;
  tkn: string = "";

  datos: Observable<Mensaje[]>;
  datos2: string[];

  title = 'push-notification';
  message: Observable<Mensaje[]>;
  constructor(private messagingService: MessagingService,public _cs: ChatService) { }

  ngOnInit() {
    // this.elemento = document.getElementById('app-mensajes');

    // this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
    
    this.msgs.push(this.messagingService.chat);
     
  }

  
  sendMessage(){
    let msg: Mensaje = {
      notification: {
        title: 'Administrador',
        body: this.mensaje,
        click_action: 'FCM_PLUGIN_ACTIVITY',
        sound: 'default'
      },
      data:{
        param:{
          metodo: 1,
          nombreUsuario: localStorage.getItem('id'),
          msg: this.mensaje
        }
      },
      to: this.tkn
    };

    this.msgs.push(msg.data.param);

    console.log(msg);

    console.log(this.msgs);

    this._cs.sendNotification(msg)
    .subscribe( data => {
                  // console.log(data)
                  this.datos = data;
                  console.log(this.datos);
                  if(this.datos['success'] === 1){
                      console.log(this.datos['results'][0]['message_id']);
                      // localStorage.setItem('chats',JSON.stringify(msg));
                      // this.msgs.push(msg);
                      
                  }
                  if(this.datos['failure'] === 1){
                      console.log(this.datos['results'][0]['error']);
                  }
                },
                error => console.log(error));
    this.mensaje = "";

    this.elemento = document.getElementById('content');
    setTimeout( () => {
      
      this.elemento.scrollTop = this.elemento.scrollHeight;
    });
  }

  // constructor(/*db:AngularFirestore, public _cs: ChatService*/) {
  //   // this.chats = db.collection('chats').valueChanges(); 
  //   // this._cs.cargarMensajes().subscribe(
  //   //                                     ()=>{
  //   //                                       setTimeout(()=>{
  //   //                                         console.log(this.elemento.scrollHeight);
  //   //                                         console.log(this.elemento.scrollTop);
  //   //                                         this.elemento.scrollTop = this.elemento.scrollHeight;
  //   //                                         console.log(this.elemento.scrollTop);
  //   //                                       },20);
  //   //                                     }
  //   //                                     );

  // }

  // ngOnInit(){
  //   // this.elemento = document.getElementById('app-mensajes');
  //   // console.log(localStorage.getItem('id'));
  // }

  // enviarMensaje(){
  //   console.log(this.mensaje);

  //   if( this.mensaje.length === 0){
  //     return;
  //   }

  //   this._cs.agregarMensaje( this.mensaje )
  //                         .then( () => {console.log('Mensaje Enviado');
  //                                       this.mensaje = "";})
  //                         .catch( (err) => console.log('Error al enviar', err));
  // }

}
