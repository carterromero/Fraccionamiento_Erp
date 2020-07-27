
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodsService {
  

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/ic/api/integration/v1/flows/rest';
  private username = 'andres.coyotl@dti-consultores.com';
  private password = 'ASDFGHJ1234+*a';

  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username+':'+this.password)
    })
  };
 
  constructor(private http: HttpClient) { }
  
  createPeriods(periods: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl+'/ERP_GL_PERIODS_INSERT/1.0/periods'}`, periods, this.httpOptions);
  }

  getPeriods(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl+'/ERP_GL_PERIODS_GET_BY_ID/1.0/periods'}/${id}`, this.httpOptions);
  }

  updatePeriods(id: number, periods: any): Observable<Object> {
    return this.http.put(`${this.baseUrl+'/ERP_GL_PERIODS_UPDATE/1.0/periods'}/${id}`, periods, this.httpOptions);
  }

  deletePeriods(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl+'/ERP_GL_PERIODS_DELETE/1.0/periods'}/${id}`, this.httpOptions);
  }

  getPeriodsList(): Observable<any> {    
    return this.http.get(`${this.baseUrl+'/ERP_GL_PERIODS_GET_ALL/1.0/periods'}`, this.httpOptions);
  }
}