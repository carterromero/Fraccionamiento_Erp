import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username = 'ivan.dominguez@dti-consultores.com';
  private password = 'Jikantiempo23';


  constructor(private http: HttpClient) { }

  createEmployee(Employee: Object): Observable<Object> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/POST_INSERT/1.0/post_collection`, Employee, { headers });
  }

  getEmployee(id: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/GET_ONE_AR_COLLECTI/1.0/get_one_ar_collection/${id}`, { headers });
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/UPDATE_AR_COLLECTION/1.0/update/${id}`, value, { headers });
  }

  deleteEmployee(id: number): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/DELETE_AR_COLLECTION/1.0/delete/${id}`, { responseType: 'text', headers });
  }

  getEmployeeList(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/GET_AR_COLLETION/1.0/customer`, { headers });
  }

  getEmployeeListcombo(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/GET_AR_COLLETION/1.0/customer`, { headers });
  }

  getEmployeeRepo(p_collection_name_resident: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AR_REPORT_ESTADO_CUENTA/1.0/reporte_estado_cuenta/${p_collection_name_resident}`, { headers });
  }
}
