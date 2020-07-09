import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='ivan.dominguez@dti-consultores.com';
  private password='Jikantiempo23';
  

  constructor(private http: HttpClient) { }

  createCollection(Collection: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/POST_INSERT/1.0/post_collection`, Collection,{headers});
  }

  getCollection(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/GET_ONE_AR_COLLECTI/1.0/get_one_ar_collection/${id}`,{headers});
  }

  updateCollection(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/UPDATE_AR_COLLECTION/1.0/update/${id}`, value,{headers});
  }

  deleteCollection(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/DELETE_AR_COLLECTION/1.0/delete/${id}`, { responseType: 'text', headers});
  }

  getCollectionList(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/GET_AR_COLLETION/1.0/customer`,{headers});
  }

  getCollectionListcombo(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/GET_AR_COLLETION/1.0/customer`,{headers});
  }

}
