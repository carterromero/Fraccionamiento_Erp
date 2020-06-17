import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private baseUrl = 'http://127.0.0.1:8000/api/employee';
  private baseUrl = 'http://apifraccionamientos.superhouse.mx/api/nombres';


  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}?token=` + localStorage.getItem('token'), employee);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}?token=` + localStorage.getItem('token'));
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}?token=` + localStorage.getItem('token'), value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}?token=` + localStorage.getItem('token'), { responseType: 'text' });
  }

  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}?token=` + localStorage.getItem('token'));
  }
}