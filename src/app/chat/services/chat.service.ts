import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interfaces/mensaje.interface';
import { map } from 'rxjs/operators'; 
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = 'https://fcm.googleapis.com/fcm/send';
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization':'key=AAAAzgdTJtc:APA91bECXFF5RzpyTiY49RP9y1BSer70--X45VDvA4ff5RLBKEBOzI6wOxBcSVATEdKE7jtEJ73kXpoKBvZVDXqx1AVLT7FPX-x3hWNkW45C91gYYlNIuVGa8mdVd1J8f7MJ4hpA9kCS',
      'Content-Type':'application/json'
    })
  };
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Authorization':'key=AAAAzgdTJtc:APA91bECXFF5RzpyTiY49RP9y1BSer70--X45VDvA4ff5RLBKEBOzI6wOxBcSVATEdKE7jtEJ73kXpoKBvZVDXqx1AVLT7FPX-x3hWNkW45C91gYYlNIuVGa8mdVd1J8f7MJ4hpA9kCS',
  //     'Content-Type':'application/json'
  //   })
  // };
  
  constructor( private http: HttpClient ){}

  sendNotification(body: any): Observable<any>{
    return this.http.post(`${this.baseUrl}`,body,this.httpOptions);
  }

  // private itemsCollection: AngularFirestoreCollection<Mensaje>;
  // public chats: Mensaje[] = [];
  
  // constructor(private afs: AngularFirestore) { }

  // cargarMensajes(){
  //   this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=>ref.orderBy('fecha','desc').limit(7));

  //   return this.itemsCollection.valueChanges()
  //                               .pipe(map ((mensajes: Mensaje[]) => {
  //                                 console.log(mensajes);
  //                                 // this.chats = mensajes;
  //                                 this.chats = [];
  //                                 for(let mensaje of mensajes){
  //                                   this.chats.unshift( mensaje );
  //                                 }

  //                                 return this.chats;
  //                               }));
  // }

  // agregarMensaje( texto: string ){
  //   let mensaje: Mensaje = {
  //     nombre: 'Demo',
  //     mensaje: texto,
  //     fecha: new Date().getTime()
  //   }

  //   return this.itemsCollection.add( mensaje );
  // }
}
