import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='victor.garcia@dti-consultores.com';
  private password='KaledKeyter236kf';
  

  constructor(private http: HttpClient) { }




  createEmployee(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_INSERT_TRANSA_ENTRYS/1.0/transactions_entrys`, employee,{headers});
  }
  getEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_ADMIN_GET_ONE_TRANSA/1.0/transaction/${id}`,{headers});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_ADMIN_UPDATE_TRANSACT/1.0/transaction/${id}`, value,{headers});
  }


  getEmployeeList(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_ADMIN_GET_ALL_TRANSA/1.0/transaction/${id}`,{headers});
  }


  getEmployeeListPurcharse(p_admin_condominiuns_id:number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_PO_TRANSA_GETALL/1.0/transa/${p_admin_condominiuns_id}`,{headers});
  }


  getEmployeeListStatusPrec(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ALL_PRICE_ARTIC/1.0/price_articles`,{headers});
  }



  getEmployeeListEstatus(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ALL_STATU_ARTIC/1.0/status_articles`,{headers});
  }

  getTenantList(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_RH_GET_ALL_TENANT/1.0/tenants`,{headers});
  }

  getEOneAricleButton(id: number, p_condominiuns_id:number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    //return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ONE_ARTICL/1.0/articles/${id},${p_condominiuns_id}`,{headers});
    return this.http.get(this.baseUrl + 'ic/api/integration/v1/flows/rest/ERP_INV_PO_GETONE_TRANSA/1.0/getpurcharseTransaction/'+ id + ','+p_condominiuns_id,{headers});
  }



  getEmployeeListSubI(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ALL_SUB_INVEN/1.0/sub_inventarys`,{headers});
  
  } 

  getEmployeeListMaster(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ALL_MASTE_INVEN/1.0/master_inventarys/${id}`,{headers});
  }

  
















  
}
