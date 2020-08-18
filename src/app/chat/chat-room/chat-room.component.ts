import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../services/chat.service';
import { Mensaje } from '../interfaces/mensaje.interface';
import { MessagingService } from '../../messaging.service';
import { UserService } from 'src/app/services/admin/user.service';
import { User } from 'src/app/services/admin/user';
//import { Mensaje } from '../models/mensaje';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatRoomComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  general: Observable<User[]>;
  msgs = [];
  //users = [];

  currentUser = localStorage.getItem('name');
  mensaje: string = "";
  respuesta: string = "";
  public chats: Mensaje[] = [];
  elemento;
  tkn: string = "";

  datos: Observable<Mensaje[]>;
  datos2: string[];

  title = 'push-notification';
  message: Observable<Mensaje[]>;
  constructor(
    private messagingService: MessagingService,
    public _cs: ChatService,
    private generalService: UserService) { 
    // this.messagingService.currentMessage;
  }

  ngOnInit() {

    this.reloadData();


    console.log(this.tkn);
    
    // this.elemento = document.getElementById('app-mensajes');

    // this.messagingService.requestPermission()
    this.message = JSON.parse(localStorage.getItem("chat"));
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage
    
    // .subscribe( data =>{
    //   if(data !== null){
    //     // this.msgs.push(JSON.parse(data['data']['param']));
    //     this.addMessage(JSON.parse(data['data']['param']));
    //     this.elemento = document.getElementById('content');
    //     setTimeout( () => {
    //       this.elemento = document.getElementById('content');
    //       this.elemento.scrollTop = this.elemento.scrollHeight;
    //     });
    //   }
    // });
    this.loadMessage();
    this.getMessages();
  }

  reloadData() {
    
    this.generalService.listUserWithToken().subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.listUserWithToken();
      },
      error => {
        console.log(error);   
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
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
          metodo: 2,
          nombreUsuario: localStorage.getItem('name'),
          msg: this.mensaje
        }
      },
      to: this.tkn
    };

    // this.msgs.push(msg.data.param);
    this.addMessage(msg.data.param);
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

  addMessage(list){
    this.msgs.push(list);
    localStorage.setItem('chats',JSON.stringify(this.msgs));
  }

  getMessages(){
    var storeMsg = localStorage.getItem('chats');
    if( storeMsg === null){
      this.msgs = [];
    }else{
      this.msgs = JSON.parse(storeMsg);
    }
    console.log(this.msgs);
    return this.msgs;
  }

  loadMessage(){
    this.messagingService.currentMessage
    .subscribe( data =>{
      if(data !== null){
        // this.msgs.push(JSON.parse(data['data']['param']));
        this.addMessage(JSON.parse(data['data']['param']));
        this.elemento = document.getElementById('content');
        setTimeout( () => {
          this.elemento = document.getElementById('content');
          this.elemento.scrollTop = this.elemento.scrollHeight;
        });
      }
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
