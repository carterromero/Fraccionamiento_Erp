import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private baseUrl = 'https://dtipruebas-idt2tecbgzl5-ia.integration.ocp.oraclecloud.com:443/';
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa('joaquin.baez@dti-consultores.com:Consultant-18@')
    })
  };
  
  constructor(private http: HttpClient) { }

  getReports(datestart: Date, dateend: Date): Observable<any> {
    //let uri = (API_URL + 'AC_GET_ALL_REPORT_PERSON/1.0/getall?datestart='+datestart+'&dateend='+dateend);
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_ALL_REPORT_PERSON/1.0/getall?datestart=${datestart}&dateend=${dateend}`, this.httpOptions);
  }
  getReportsPeople(datestart1: Date, dateend1: Date, tipo: string): Observable<any> {
    //let uri = (API_URL + 'AC_GET_ALL_REPOR_ADMIT_PEOPL/1.0/getallAdmitted?datestart='+datestart1+'&dateend='+dateend1);
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_ALL_PEOPLE_REPORT/1.0/getPeopleReport?datestart=${datestart1}&dateend=${dateend1}&tipo=${tipo}`, this.httpOptions);
  }
  getReportsPeopleV(datestart1: Date, dateend1: Date, tipo: string): Observable<any> {
    //let uri = (API_URL + 'AC_GET_ALL_REPOR_ADMIT_PEOPL/1.0/getallAdmitted?datestart='+datestart1+'&dateend='+dateend1);
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_PEOPLEV_REPORT/1.0/getPeopleReport?datestart=${datestart1}&dateend=${dateend1}&tipo=${tipo}`, this.httpOptions);
  }
  getReportVisitors(startDateV: Date, endDateV: Date): Observable<any> {
    //let uri = (API_URL + 'AC_GET_REPORT_VISITORS/1.0/getReportVisitors?startDate='+startDateV+'&endDate='+endDateV);
    return this.http.get(`${this.baseUrl}ic/api/integration/v1/flows/rest/AC_GET_REPORT_VISITORS/1.0/getReportVisitors?startDate=${startDateV}&endDate=${endDateV}`, this.httpOptions);
  }
}
