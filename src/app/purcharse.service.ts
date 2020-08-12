import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurcharseService {



 
  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='victor.garcia@dti-consultores.com';
  private password='KaledKeyter236kf';
  

  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_INSERT_PURCHA_ORDER/1.0/purcharse_order`, employee,{headers});
  }

  getEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_ONE_PURCH_ORDER/1.0/purcharse_order/${id}`,{headers});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_UPDATE_PURCHA_ORDER/1.0/purcharse_order/${id}`, value,{headers});
  }

  deleteEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_DELETE_PURCHA_ORDER/1.0/purcharse_order/${id}`, { responseType: 'text', headers});
  }

  getEmployeeList(id:number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_ALL_PURCH_ORDER/1.0/purcharse_order/${id}`,{headers});
  }


  getEmployeeListStatusPurcharse(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_ALL_STAT_PURC_COMB/1.0/combo_status_put`,{headers});
  }



  getEmployeeListcombo(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_ALL_ARTICL/1.0/false_articles`,{headers});
  }


  getCatList(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ALL_CATEGO/1.0/categories`,{headers});
  }
  
  getEmployeeListcomboC(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ALL_CATEG_COMBO/1.0/categories`,{headers});
  }


 


  createFilters(employee: Object): Observable <any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_PURCHA_ORDER_FILTER/1.0/purcharse_order_filters`, employee,{headers});
  }



  getOneUser(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_ADMIN_GET_ONE_USER/1.0/user/${id}`,{headers});
  }




  getEOneAricleButton(id: number, p_condominiuns_id:number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    //return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ONE_ARTICL/1.0/articles/${id},${p_condominiuns_id}`,{headers});
    return this.http.get(this.baseUrl + 'ic/api/integration/v1/flows/rest/ERP_PO_INV_GETONE_ARTICL/1.0/getone_articles/'+ id + ','+p_condominiuns_id,{headers});
  }








  updateStatusPurchar(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}/ic/api/integration/v1/flows/rest/ERP_PO_UPDAT_STATU_PURCH_2/1.0/status_purcharse/${id}`, value,{headers});
  }

  

}
