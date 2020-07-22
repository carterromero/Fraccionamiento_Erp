import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaytmentService {


  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='evelin.picazo@dti-consultores.com';
  private password='ASDFGHJ1234+*n';
  

  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_INSER_PAYME_TERMS_CATAL/1.0/payment_terms_catalogo`, employee,{headers});
  }

  getEmployee(p_id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_ONE_PAYM_TERM_CATA/1.0/payment_terms_catalogo/${p_id}`,{headers});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_UPDAT_PAYME_TERMS_CATAL/1.0/payment_terms_catalogo/${id}`, value,{headers});
  }

  deleteEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_DELET_PAYME_TERMS_CATAL/1.0/payment_terms_catalogo/${id}
    `, { responseType: 'text', headers});
  }

  getEmployeeList(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_ALL_PAYM_TERM_CATA/1.0/payment_terms_catalogo`,{headers});
  }


  getEmployeeListcombo(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}/ic/api/integration/v1/flows/rest/ERP_PO_GET_ALL_PAYM_TERM_COMB/1.0/payment_terms_combo`,{headers});
  }




}
