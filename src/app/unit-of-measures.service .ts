import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitOfMeasuresService {
  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='abdiel.romero@dti-consultores.com';
  private password='Ingenieroars7';

  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_INSER_UNIT_OF_MEASU/1.0/unit_of_measures`, employee,{headers});
  }

  getEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ONE_UNIT_OF_MEAS/1.0/unit_of_measures/${id}`,{headers});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_UPDAT_UNIT_OF_MEASU/1.0/unit_of_measures/${id}`, value,{headers});
  }

  deleteEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_DELET_UNIT_OF_MEASU/1.0/unit_of_measures/${id}`, { responseType: 'text', headers});
  }

  getEmployeeList(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ALL_UNIT_OF_MEAS/1.0/unit_of_measures`,{headers});
  }
  getEmployee1Listcombo(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ALL_OF_MEAS_COMB/1.0/uniof`,{headers});
  }


  getPrecio(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ALL_PRICE_ARTIC/1.0/price_articles`,{headers});
  }


}
