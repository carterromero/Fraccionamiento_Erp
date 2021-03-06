import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //private baseUrl = 'http://apifraccionamientos.superhouse.mx/api/login';
  private baseUrl = 'http://apifraccionamientos.superhouse.mx/api/';

  constructor(private http: HttpClient) { }

  signup(signup: Object): Observable<any> {
    return this.http.post(`${this.baseUrl+'registers'}`, signup);
  }

  login(login: Object): Observable<any> {
    return this.http.post(`${this.baseUrl+'login'}`, login);
  }

  logout(): Observable<any> {
    return this.http.get(`${this.baseUrl+'logout'}?token=` + localStorage.getItem('token'));
  }
  
  getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl+'user'}?token=` + localStorage.getItem('token'));
  }

  /*
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }*/
}

