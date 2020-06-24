import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='idania.gonzalez@dti-consultores.com';
  private password='Paramore7804$$..';
  

  constructor(private http: HttpClient) { }

  createDepartment(department: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_RH_INSERT_DEPARTME/1.0/insertdepartments`, department,{headers});
  }

  getDepartment(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_RH_GETONE_DEPARTME/1.0/onedepartments/${id}`,{headers});
  }

  updateDepartment(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_RH_UPDATE_DEPARTME/1.0/departments/${id}`, value,{headers});
  }

  deleteDepartment(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_RH_DELETE_DEPARTME/1.0/departments/${id}`, { responseType: 'text', headers});
  }

  getDepartmentList(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_RH_GET_DEPARTME/1.0/departments`,{headers});
  }
}