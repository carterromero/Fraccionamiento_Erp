import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

 

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='abdiel.romero@dti-consultores.com';
  private password='Ingenieroars7';
  

  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_INSERT_SUPPLIER/1.0/supplier`, employee,{headers});
  }

  getEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_ONE_SUPPLI/1.0/supplier/${id}`,{headers});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_UPDATE_SUPPLIER/1.0/supplier/${id}`, value,{headers});
  }

  deleteEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_DELETE_SUPPLIER/1.0/supplier/${id}`, { responseType: 'text', headers});
  }

  getEmployeeList(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PARRRO_GET_ALL_KEY/1.0/rest_payrroll`,{headers});
  }



  getEmployeeListCuentas(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_TS_GET_ALL_BANK_ACCOU/1.0/bankaccounts`,{headers});
  }


  
  getEmployeeListcombo(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_ALL_SUPPL_COMBO/1.0/supplier_combo
    `,{headers});
  }


  getEmployeeListReport(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_REPORT_PROVEE/1.0/reporte_proveedores/${id}`,{headers});
  }

  createFilter(employee: Object): Observable <any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_SUPPLIERFI/1.0/supplierfilter`, employee,{headers});
  }

 
}
