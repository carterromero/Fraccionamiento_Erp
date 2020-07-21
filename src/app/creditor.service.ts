import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreditorService {
  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='andres.coyotl@dti-consultores.com';
  private password='ASDFGHJ1234+*a'
  

  constructor(private http: HttpClient) { }


  getEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CREDITOR_DETAILL/1.0/creditors/${id}`,{headers});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CREDITOR_UPDATE/1.0/creditors/${id}`, value,{headers});
  }


  deleteEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CREDITOR_DELETE/1.0/creditors/${id}`, { responseType: 'text', headers});
  }

  createEmployee(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CREDITOR_INSER/1.0/creditors`, employee,{headers});
  }


  getEmployeeList(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CREDITOR_V1/1.0/creditors`,{headers});
  }

  getEmployeed(id:string ): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_NAMECREDIT/1.0/creditors/${id}`,{headers});
  }
}