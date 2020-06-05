import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = 'http://apifraccionamientos.superhouse.mx/api/direcciones';

  constructor(private http: HttpClient) { }

  getAddress(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}?token=` + localStorage.getItem('token'));
  }

  createAddress(address: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}?token=` + localStorage.getItem('token'), address);
  }

  updateAddress(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}?token=` + localStorage.getItem('token'), value);
  }

  deleteAddress(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}?token=` + localStorage.getItem('token'), { responseType: 'text' });
  }

  getAddressList(): Observable<any> {
    return this.http.get(`${this.baseUrl}?token=` + localStorage.getItem('token'));
  }
}
