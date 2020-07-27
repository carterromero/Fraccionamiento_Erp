import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='andres.coyotl@dti-consultores.com';
  private password='ASDFGHJ1234+*a'
  

  constructor(private http: HttpClient) { }


  getEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CLIENT_ONEGET/1.0/client/${id}`,{headers});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CLIENTE_UPDATE/1.0/client/${id}`, value,{headers});
  }


  deleteEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CLIENT_DELET/1.0/client/${id}`, { responseType: 'text', headers});
  }

  createEmployee(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CLIENT_INSERT/1.0/client`, employee,{headers});
  }


  getEmployeeList(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CLIENT_GET/1.0/client`,{headers});
  }
}