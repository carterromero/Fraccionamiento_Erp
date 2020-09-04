import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../services/chat.service';
import { Mensaje } from '../interfaces/mensaje.interface';
import { MessagingService } from '../../messaging.service';
import { UserService } from 'src/app/services/admin/user.service';
import { User } from 'src/app/services/admin/user';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
declare var jQuery: any;


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatRoomComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  hide = true;
  id: number;
  // tslint:disable-next-line: variable-name
  user_name: string;
  alertDisable = true;
  alertDisables = true;
  alertMessage = 'null';
  alertMessages = 'null';
  general: Observable<User[]>;
  msgs = [];
  // users = [];

  currentUser = localStorage.getItem('name');
  // tslint:disable-next-line: no-inferrable-types
  mensaje: string = '';
    // tslint:disable-next-line: no-inferrable-types
  respuesta: string = '';
  public chats: Mensaje[] = [];
  elemento;
    // tslint:disable-next-line: no-inferrable-types
  tkn: string = '';
  tkn2: User[] = [];
  token1: string;
  tokens: any;
  tkns4 = [];


  datos: Observable<Mensaje[]>;
  datos2: string[];

  title = 'push-notification';
  message: Observable<Mensaje[]>;


  showEmojiPicker = false;
  set = 'twitter';

  constructor(
    private router: Router,
    private messagingService: MessagingService,
    // tslint:disable-next-line: variable-name
    public _cs: ChatService,
    private generalService: UserService,
    private route: ActivatedRoute) {
    // tslint:disable-next-line: no-unused-expression
    this.messagingService.currentMessage;
  }

  ngOnInit() {

    this.reloadDatas  ();


    // console.log(this.tkn);

    // this.elemento = document.getElementById('app-mensajes');

    // this.messagingService.requestPermission()
    this.id = this.route.firstChild.snapshot.params['id'];
    this.message = JSON.parse(localStorage.getItem('chat'));
    //this.id = localStorage.getItem('id'));
    console.log(this.id);
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;

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
    // let tkn3 = [];
    // tslint:disable-next-line: no-string-literal
    this.id = this.route.firstChild.snapshot.params['id'];
    this.generalService.getTokens(this.id).subscribe(
      data => {
        console.log(data);
        this.general = this.generalService.getTokens(this.id);
        console.log(this.general);
        // this.tkn3 = this.general;
      },
      error => {
        console.log(error);
      });
  }

  reloadDatas() {
    // let tkn3 = [];
    // tslint:disable-next-line: no-string-literal
    this.id = this.route.firstChild.snapshot.params['id'];
    this.generalService.getUserTokens(this.id).subscribe(
      data => {
        this.tokens = data;
        console.log(this.tokens);
        // tslint:disable-next-line: prefer-const
        let coins = [];
        // tslint:disable-next-line: prefer-const
        // tslint:disable-next-line: forin
        for (const key in data) {
          // tslint:disable-next-line: no-var-keyword
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Ha ocurrido un error: ' + error);
        console.error(error.status);
      },
      () => {
        // tslint:disable-next-line: no-console
        console.info('Peticion finalizada');
        // tslint:disable-next-line: prefer-const
        for (let key in this.tokens) {
          // Ciclo
          // this.token1 = dats['fcm_key'];
          // this.tkns4 = dats['fcm_key'];
          // console.info("1-------------1");
          // console.log(this.tkns4);
          /*
          console.log(this.tkns4);
          tkn3.push(dats['fcm_key']);
          this.token1 = dats['fcm_key'];
          this.tkns4 = tkn3;
          console.log(this.tkns4);
          */
        }
        // console.info("-------------");
      }
      );

  }


  sendMessage() {

    // tslint:disable-next-line: forin
    for (const key in this.tokens) {
      const dats = this.tokens[key];
      // tslint:disable-next-line: no-string-literal
      this.tkns4 = dats['fcm_key'];
          // tslint:disable-next-line: no-console
      console.info('1-------------1');
      console.log(this.tkns4);
      const msg: Mensaje = {
      notification: {
        title: 'Administración ERP Fraccionamientos',
        body: this.mensaje,
        click_action: 'FCM_PLUGIN_ACTIVITY',
        sound: 'default'
      },
      data: {
        param: {
          metodo: 1,
          nombreUsuario: localStorage.getItem('name'),
          msg: this.mensaje
        }
      },
      // tslint:disable-next-line: no-string-literal
      to: dats['fcm_key']
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
                  // tslint:disable-next-line: no-string-literal
                  if (this.datos['success'] === 1) {
                    // tslint:disable-next-line: no-string-literal
                      console.log(this.datos['results'][0]['message_id']);
                      // localStorage.setItem('chats',JSON.stringify(msg));
                      // this.msgs.push(msg);

                  }
                  // tslint:disable-next-line: no-string-literal
                  if (this.datos['failure'] === 1) {
                    // tslint:disable-next-line: no-string-literal
                      console.log(this.datos['results'][0]['error']);
                  }
                },
                error => console.log(error));
    // tslint:disable-next-line: comment-format
    //this.mensaje = "";

      this.elemento = document.getElementById('content');
      setTimeout( () => {

      this.elemento.scrollTop = this.elemento.scrollHeight;
    });

  }


}


  addMessage(list) {
    let hash = {};
      this.msgs = this.msgs.filter(o => hash[o.msg] ? false : hash[o.msg] = true);
      console.log( '********' );
      console.log(JSON.stringify( this.msgs));

    this.msgs.push(list);
    localStorage.setItem('chats' + this.id, JSON.stringify(this.msgs));
    /*
    (function($) {
      let hash = {};
      this.msgs = this.msgs.filter(o => hash[o.metodo] ? false : hash[o.metodo] = true);
      console.log( '********' );
      console.log(JSON.stringify(this.msgs));
    })(jQuery);
    */
  }

  getMessages() {
    // tslint:disable-next-line: prefer-const
    let storeMsg = localStorage.getItem('chats' + this.id);
    if ( storeMsg === null) {
      this.msgs = [];
    } else {
      this.msgs = JSON.parse(storeMsg);
    }
    console.log(this.msgs);
    return this.msgs;
  }

  loadMessage() {
    this.messagingService.currentMessage
    .subscribe( data => {
      if (data !== null) {
        // this.msgs.push(JSON.parse(data['data']['param']));
        // tslint:disable-next-line: no-string-literal
        this.addMessage(JSON.parse(data['data']['param']));
        this.elemento = document.getElementById('content');
        setTimeout( () => {
          this.elemento = document.getElementById('content');
          this.elemento.scrollTop = this.elemento.scrollHeight;
        });
      }
    });
  }

  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
    this.showEmojiPicker = !this.showEmojiPicker;
  }


  addEmoji(event) {
    console.log(this.mensaje);
    const { message } = this;
    console.log(message);
    console.log(`${event.emoji.native}`);
    const text = `${event.emoji.native}`;

    this.mensaje = text;
    // this.showEmojiPicker = false;
  }
  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log('onblur');
  }

  limpiarInput(){
    (function($) {
      $(document).ready(function() {
        $('#Project').click(function() {
          $('input[type="text"]').val('');
        });
      });
    })(jQuery);
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
