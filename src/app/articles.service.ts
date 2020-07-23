import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='victor.garcia@dti-consultores.com';
  
  private password='KaledKeyter236kf';

  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_INSERT_ARTICLES/1.0/articles`, employee,{headers});
  }

  getEmployee(id: number, p_condominiuns_id:number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    //return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ONE_ARTICL/1.0/articles/${id},${p_condominiuns_id}`,{headers});
    return this.http.get(this.baseUrl + 'ic/api/integration/v1/flows/rest/ERP_INV_GET_ONE_ARTICL/1.0/articles/'+ id + ','+p_condominiuns_id,{headers});
  }

  updateEmployee(id: number,employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_UPDATE_ARTICLES/1.0/articles/${id}`,employee,{headers});
  }

  deleteEmployees(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_DELETE_ARTICLES/1.0/articles/${id}`, { responseType: 'text', headers});
  }

  getEmployeeList(id:number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ALL_ARTICL/1.0/articles/${id}`,{headers});
  }
  
  getListCommons(): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_RH_GET_COMMON_RESERV/1.0/commons`,{headers});
  }
  getEmployeeReport(p_condominiuns_id): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_REPORTE_ARTICLES/1.0/reporte_articles/${p_condominiuns_id}`,{headers});
  }
  

  getEmployeeHistori(p_condominiuns_id): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_REPORT_ARTICL_HIST/1.0/reporte_articles_hist/${p_condominiuns_id}`,{headers});
  }



  createFilters(employee: Object): Observable <any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_REPORTEGEN/1.0/artgen_filters`, employee,{headers});
  }


  createFilterHistoria(employee: Object): Observable <any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_REPOR_FILTE_ARTIC_HIST/1.0/filter_articles_hist`, employee,{headers});
  }


 


//filtro  por subinventario
getEmployeesub( employee: Object): Observable<any> {
  const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
  //return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ERP_INV_GET_ONE_ARTICL/1.0/articles/${id},${p_condominiuns_id}`,{headers});
  return this.http.post(`${this.baseUrl }ic/api/integration/v1/flows/rest/ERP_INV_REPORTEF_SUB/1.0/subinv`, employee,{headers});
}

}
