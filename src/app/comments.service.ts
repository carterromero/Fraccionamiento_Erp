import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  private username='idania.gonzalez@dti-consultores.com';
  private password='Paramore7804$$..';
  

  constructor(private http: HttpClient) { }

  createComment(comments: Object): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.post(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVIS_ERP_ADMIN_COMME_INSER_EHP/1.0/insertComments`, comments,{headers});
  }

  getCommentO(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVI_ERP_ADMI_COMM_GET_ONE_EHP/1.0/getOneComment/${id}`,{headers});
  }
  
  updateComment(id: number, value: any): Observable<Object> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.put(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVIS_ERP_ADMIN_COMME_UPDAT_EHP/1.0/updateComments/${id}`, value,{headers});
  }

  deleteComment(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.delete(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVIS_ERP_ADMIN_COMME_DELET_EHP/1.0/deleteComments/${id}`, { responseType: 'text', headers});
  }

  getComment(id: number): Observable<any> {
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+ ':' +this.password)})
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/ARVI_ERP_ADMI_COMM_GET_ALL_EHP/1.0/getAllComments/${id}`,{headers});
  }
  
  
}
