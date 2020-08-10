import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TranslService  {
  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='andres.coyotl@dti-consultores.com';
  private password='ASDFGHJ1234+*a'
  

  constructor(private http: HttpClient) { }


  getEmployee(p_condominio_id: number, p_periodo_id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_GL_REPORTE_TRANSACC/1.0/reporte_transacciones/${p_condominio_id},${p_periodo_id}`,{headers});
  }


  getEmployeesaldobalz(p_condominiums_id: number, p_periods_id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_GL_REPORT_SALDO_BALANZ/1.0/reporte_saldo_balanza/${p_condominiums_id},${p_periods_id}`,{headers});
  }

  getEmployeesconsilia(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_GL_REPORTE_CONCIALI/1.0/reporte_concialiacion`,{headers});
  }
  createEmployee(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_GL_INSERT_CONCILIT/1.0/insert_concilitiation`, employee,{headers});
  }
 

//////////////////////

getEmployeesconsiliatotal(): Observable<any> {
  const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
  return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_GL_CONCI_TOTAL/1.0/consitotal`,{headers});
}


}