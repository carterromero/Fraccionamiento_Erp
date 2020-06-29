import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferralAddressService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username = 'ivan.dominguez@dti-consultores.com';
  private password = 'Jikantiempo24';


  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_INSERT_REFERR_ADDRES/1.0/referral_address`, employee, { headers });
  }

  getEmployee(id: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_GET_ONE_REFER_ADDRE/1.0/referral_address/${id}`, { headers });
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_UPDATE_REFERR_ADDRES/1.0/referral_address/${id}`, value, { headers });
  }

  deleteEmployee(id: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_DELETE_REFERR_ADDRES/1.0/referral_address/${id}`, { responseType: 'text', headers });
  }

  getEmployeeList(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_GET_REFERR_ADDRES/1.0/referral_address`, { headers });
  }
}