import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenantsServiceService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa('joaquin.baez@dti-consultores.com:Consultant-18@')
    })
  };
  constructor( private http: HttpClient) { }

  getTenants(): Observable<any> {
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_ALL_TENANTS/1.0/getall`, this.httpOptions);
  }


  updateTenants(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_UPDATE_TENANTS/1.0/update/${id}`, value , this.httpOptions);
  }

  getviewsid(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GETONE_TENANTS/1.0/getone/${id}`, this.httpOptions);
  }


  getTenantsexists(): Observable<any> {
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_ALL_TENAN_NOT_EXIST/1.0/getalltenants`, this.httpOptions);
  }

  insertAssignar(insertt:Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_INSERT_ASSIGN_TAG/1.0/insertAssignTag`, insertt , this.httpOptions);
  }

 /* deleteVisitas(id:Number): Observable<any> {
    return this.http.delete(API_URL+'/' + id);
 }
   

createVisitas(visita: Object): Observable<Object> {
  return this.http.post(API_URL,visita);
}*/
}
