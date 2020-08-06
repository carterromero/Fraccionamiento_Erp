import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsEntrysService {
  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='abdiel.romero@dti-consultores.com';
  private password='Ingenieroars7';

  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_INSERT_TRANSA_ENTRYS/1.0/transactions_entrys`, employee,{headers});
  }

  getEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ONE_TRANS_ENTRY/1.0/transactions_entrys/${id}`,{headers});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_UPDATE_TRANSA_ENTRYS/1.0/transactions_entrys/${id}`, value,{headers});
  }

  deleteEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_DELETE_TRANSA_ENTRYS/1.0/transactions_entrys/{p_id}`, { responseType: 'text', headers});
  }

  getEmployeeList(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ALL_TRANS_ENTRY/1.0/transactions_entrys`,{headers});
  }

  getEmployeepuchar(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_PO_TRANSACT/1.0/purchase_transaction/${id}`,{headers});
  }
  
  getEOnePurcharseButton(id: number, p_condominiuns_id:number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    //return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ONE_ARTICL/1.0/articles/${id},${p_condominiuns_id}`,{headers});
    return this.http.get(this.baseUrl + 'ic/api/integration/v1/flows/rest/ERP_PO_INV_GETONE_ARTICL/1.0/getone_articles/'+ id + ','+p_condominiuns_id,{headers});
  }




  getEmployeeListPurcharse(p_admin_condominiuns_id:number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_ALL_PURCH_ORDER/1.0/purcharse_order/${p_admin_condominiuns_id}`,{headers});
  }




  getEmployeButton(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_ONE_PURCH_ORDER/1.0/purcharse_order/${id}`,{headers});
  }
  
}
