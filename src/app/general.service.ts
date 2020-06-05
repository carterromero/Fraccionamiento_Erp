import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private baseUrl = 'http://apifraccionamientos.superhouse.mx/api/general';
  

  constructor(private http: HttpClient) { }

  getGeneral(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}?token=` + localStorage.getItem('token'));
  }

  createGeneral(general: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}?token=` + localStorage.getItem('token'), general);
  }

  updateGeneral(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}?token=` + localStorage.getItem('token'), value);
  }

  deleteGeneral(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}?token=` + localStorage.getItem('token'), { responseType: 'text' });
  }

  getGeneralList(): Observable<any> {
    return this.http.get(`${this.baseUrl}?token=` + localStorage.getItem('token'));
  }
  getGeneralListQ(): Observable<any> {
    return this.http.get(`${this.baseUrl}/query?token=` + localStorage.getItem('token'));
  }
}
