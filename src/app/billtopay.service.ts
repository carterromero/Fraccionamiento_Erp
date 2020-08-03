import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Billtopayservice {
  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='andres.coyotl@dti-consultores.com';
  private password='ASDFGHJ1234+*a'
  

  constructor(private http: HttpClient) { }


  getEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_BILLTOPA_DETAIL/1.0/billtopay/${id}`,{headers});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_BILLTOPA_UPDATE/1.0/billtopay/${id}`, value,{headers});
  }


  deleteEmployee(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_BILLTOPA_DELETE/1.0/billtopay/${id}`, { responseType: 'text', headers});
  }

  createEmployee(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_BILLTOPA_INSERT/1.0/billtopay`, employee,{headers});
  }


  getEmployeeList(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_GET_BILLTOPAY/1.0/billtopay`,{headers});
  }

  updateEmpl(p_purcharse_id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_UPDAT_STATU_PURCH_ORDER/1.0/status_purcharse_order/${p_purcharse_id}`, value,{headers});
  }

  getEmployeed(id:string ): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_NAMECREDIT/1.0/creditors/${id}`,{headers});
  }

  getEmployeecl(id:string ): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CLIENTENAM/1.0/client/${id}`,{headers});
  }

  getEmployeebill(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_CONSULTABI/1.0/fact`,{headers});
  }

  getONEPUSHA(id:string ): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_ONEGETPUSH/1.0/pusha/${id}`,{headers});
  }
//servicio  con informacion requerida de la orden de compra
  getPUSER(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_AP_GEFACPURHA/1.0/purchas`,{headers});
  }

  
  getUsers(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_ADMIN_GET_ALL_USER/1.0/user`,{headers});
  }


  getOneUser(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_ADMIN_GET_ONE_USER/1.0/user/${id}`,{headers});
  }

  getEmployeeListap(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_PO_GET_BILLPROV/1.0/billprov`,{headers});
  }

  


}