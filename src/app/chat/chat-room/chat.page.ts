import { Component, OnInit } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import {DatosService} from '../datos/datos.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API, Correo, Pass } from '../services/service-global.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  interval
  messages
  messages2
  messages3
  currenUser=localStorage.getItem("nombreUsuario");
  titeChat='Administrador';
  newMsg='';
  tokens
  btnCambioMensaje=true;
  constructor(
    private fcm: FCM,
    private router: Router,
    private datosServices : DatosService,
    private http : HttpClient
  ) { 
  }
  
  ngOnInit() { 
    this.fcm.subscribeToTopic('marketing');
    // this.datosServices.chat$.emit(localStorage.getItem("chat"));
    this.messages = JSON.parse(localStorage.getItem("chat"));
    // this.messages2 = JSON.parse(localStorage.getItem("chat"));
    // this.datosServices.chat$.subscribe(chatOB=>{
    //   this.interval = setInterval(() => {
    //     // this.ubic();
    //     this.messages = JSON.parse(chatOB);
    //     console.log("ChatOB: ",this.messages);
    //     clearInterval(this.interval);
    //   }, 1000);
    // });
    this.fcm.onNotification().subscribe(data => {
      console.log("DatosFCM: ",data);
      if(data.wasTapped){
        var daotsMensaje = JSON.parse(data.param);
        console.log("Received in background Datos chat: ",daotsMensaje.msg);
        this.messages.push({
          user:daotsMensaje.nombreUsuario,
          msg:daotsMensaje.msg,
          createdAt:new Date().getTime()
        });
        // this.interval = setInterval(() => {
        //   // this.messages=this.messages2;
        //   clearInterval(this.interval);
        // }, 2000);
        localStorage.setItem("chat", JSON.stringify(this.messages));
        document.getElementById('cambioMensajeN').click();
        this.router.navigate(['chat'], { replaceUrl: true });
        // this.datosServices.chat$.emit(JSON.stringify(this.messages2));
      } else {
        var daotsMensaje = JSON.parse(data.param);
        console.log("Received in foreground Datos: ",daotsMensaje.msg);
        this.messages.push({
          user:daotsMensaje.nombreUsuario,
          msg:daotsMensaje.msg,
          createdAt:new Date().getTime()
        });
        // var contador=0;
        // this.interval = setInterval(() => {
        //   contador++;
        //   this.titeChat="Chat 2";
        //   console.log("Chat ",contador);
        //   // this.messages=this.messages2;
        //   if (contador==3) {
        //     clearInterval(this.interval);
        //   }  
        // }, 2000);
        localStorage.setItem("chat", JSON.stringify(this.messages));
        document.getElementById('cambioMensajeN').click();
        // this.datosServices.chat$.emit(JSON.stringify(this.messages2));
      };
    });
    this.fcm.clearAllNotifications();
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(Correo + ':' + Pass) });
    this.http.get(API + '/ic/api/integration/v1/flows/rest/ARVIS_ERP_ADMIN_TOKEN_EHP/1.0/getTokenAdmin', {headers})
    .subscribe(async result=>{
      this.tokens=result;
      console.log("Result1: ",result);
      // for (let token in result) {
      //   console.log("Token", result[token]["fcm_key"]);
      // }
    },error=>{
      console.log("Error", error);
    });
  }
  sedMessage(){
    console.log("DatosArreglo: ",this.messages);
    this.messages.push({
      user:this.currenUser,
      msg:this.newMsg,
      createdAt:new Date().getTime()
    });
    localStorage.setItem("chat", JSON.stringify(this.messages));
    for (let token in this.tokens) {
      console.log("Token", this.tokens[token]["fcm_key"]);
      var body ={
        "notification":{
          "title":this.currenUser,
          "body":this.newMsg,
          "click_action":"FCM_PLUGIN_ACTIVITY",
          "sound":"default"
        },
        "data":{
          "param":{
          "metodo":1,
          "nombreUsuario":this.currenUser,
          "msg":this.newMsg
          }
        },
          "to":""+this.tokens[token]["fcm_key"]+""
      };
      const headers = new HttpHeaders({ Authorization: 'key=AAAAzgdTJtc:APA91bECXFF5RzpyTiY49RP9y1BSer70--X45VDvA4ff5RLBKEBOzI6wOxBcSVATEdKE7jtEJ73kXpoKBvZVDXqx1AVLT7FPX-x3hWNkW45C91gYYlNIuVGa8mdVd1J8f7MJ4hpA9kCS' });
      this.http.post("https://fcm.googleapis.com/fcm/send", body, {headers})
      .subscribe((result)=>{
        console.log("Result: ",result);
      },(error)=>{
        console.log("Error: ",error);
      });
    }
    // this.datosServices.chat$.emit(JSON.stringify(this.messages));
    // this.datosServices.chat$.emit(JSON.stringify(localStorage.getItem("chat")));
    this.newMsg='';
    
  }
  cambioMensaje() {
    this.interval = setInterval(() => {
          // this.messages=this.messages2;
          this.messages = JSON.parse(localStorage.getItem("chat"));
          console.log("Cambio de mensaje: ",this.messages);
          clearInterval(this.interval);
    }, 1000);
  }

}
