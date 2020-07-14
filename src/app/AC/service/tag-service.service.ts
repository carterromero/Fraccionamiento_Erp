import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagServiceService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa('joaquin.baez@dti-consultores.com:Consultant-18@')
    })
  };
  constructor( private http: HttpClient) { }
  

  getTags(): Observable<any> {
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_ALL_TAGS/1.0/getall`, this.httpOptions);
  }

  getInactiveTags(): Observable<any> {
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_ALL_INACTI_TAGS/1.0/getall`, this.httpOptions);
  }

  createtags(tags:Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_INSERT_TAG/1.0/inserttags`, tags , this.httpOptions);

  }

  getOneReport(code:string): Observable<any> {
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_ONE_TAGS/1.0/getone/${code}`, this.httpOptions);
  }

  activar(id:number, value: any):Observable<object>{
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_UPDATE_ACTIVE_TAG/1.0/update/${id}`, value , this.httpOptions);

  }
}
