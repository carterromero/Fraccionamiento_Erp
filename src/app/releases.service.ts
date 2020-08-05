import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='idania.gonzalez@dti-consultores.com';
  private password='Paramore7804$$..';
  

  constructor(private http: HttpClient) { }

  createRelease(releases: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVIS_ERP_ADMIN_RELEA_INSER_EHP/1.0/insertReleases`, releases,{headers});
  }

  getRelease(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVI_ERP_ADMI_RELE_GET_ONE_EHP/1.0/getOneRelease/${id}`,{headers});
  }

  updateRelease(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVIS_ERP_ADMIN_RELEA_UPDAT_EHP/1.0/updateReleases/${id}`, value,{headers});
  }

  deleteRelease(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVIS_ERP_ADMIN_RELEA_DELET_EHP/1.0/deleteReleases/${id}`, { responseType: 'text', headers});
  }

  getReleaseList(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVI_ERP_ADMI_RELE_GET_ALL_EHP/1.0/getAllReleases/${id}`,{headers});
  }


  

}