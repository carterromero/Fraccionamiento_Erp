import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa('joaquin.baez@dti-consultores.com:Consultant-18@')
    })
  };
  
  constructor(private http: HttpClient) { }

  get_visitorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_ALL_VISITORS/1.0/visitors`, this.httpOptions);
  }

  get_oneVisitor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_ONE_VISITORS/1.0/visitors/${id}`, this.httpOptions);
  }

  get_visit_type(): Observable<any>{
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_ALL_VISIT_TYPE/1.0/get_visit_type`, this.httpOptions);
  }

  createVisitor(visitor: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_INSERT_VISITORS/1.0/visitor`,visitor, this.httpOptions);
    
  }

  updateVisitor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_UPDATE_VISITOR/1.0/updateVisitors/${id}`,value, this.httpOptions);
  }

  getTenants(): Observable<any> {
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_ALL_TENAN_FOR_VISIT/1.0/get_all_tenants`, this.httpOptions);
  }

  getTagsV(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_AVAILABL_TAGS/1.0/tags/${id}`, this.httpOptions);
  }
  getTagsT(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_AVAILA_TAGS_T/1.0/tags/${id}`, this.httpOptions);
  }
}
