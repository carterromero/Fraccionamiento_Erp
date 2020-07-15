import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsARService {


 
  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='abdiel.romero@dti-consultores.com';
  private password='Ingenieroars7';


  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_INSERT_PAYMENTS/1.0/payments`, employee, { headers });
  }

  getEmployee(p_id: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_GET_ONE_PAYMEN/1.0/payments/${p_id}`, { headers });
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_UPDATE_PAYMENTS/1.0/payments/${id}`, value, { headers });
  }

  deleteEmployee(id: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_DELETE_PAYMENTS/1.0/payments/${id}
    `, { responseType: 'text', headers });
  }

  getEmployeeList(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_GET_ALL_PAYMEN/1.0/payments`, { headers });
  }


  getEmployeeListcombo(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_GET_ALL_PAYMEN/1.0/payments`, { headers });
  }

}
