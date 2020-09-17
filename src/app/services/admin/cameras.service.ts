import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CamarasService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='victor.garcia@dti-consultores.com';
  private password='KaledKeyter236kf';


  constructor(private http: HttpClient) { }

  createCamara(employee: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVIS_ERP_INSERT_CAMARA_EHP/1.0/insertCamaras`, employee,{headers});
  }

  getCamara(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVIS_ERP_GET_ONE_CAMAR_EHP/1.0/getOneCamara/${id}`,{headers});
  }

  updateCamara(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVIS_ERP_UPDATE_CAMARA_EHP/1.0/updateCamaras/${id}`, value,{headers});
  }

  deleteCamara(id: number): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVIS_ERP_DELETE_CAMARA_EHP/1.0/deleteCamaras/${id}`, { responseType: 'text', headers});
  }

  getCamaraList(id: number): Observable<any> {
    const headers = new HttpHeaders( { Authorization: 'Basic ' + btoa(this.username + ':' + this.password) } )
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVIS_ERP_GET_ALL_CAMAR_EHP/1.0/getAllCamaras/${id}`, {headers});
  }
}
