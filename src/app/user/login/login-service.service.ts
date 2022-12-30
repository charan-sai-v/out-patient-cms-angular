import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  patientLogin(data: any): Observable<any>{
    return this.http.post('http://localhost:2040/patient/login', data)
  }

  doctortLogin(data: any): Observable<any>{
    return this.http.post('http://localhost:2040/doctor/login', data)
  }

  admintLogin(data: any): Observable<any>{
    return this.http.post('http://localhost:2040/admin/login', data)
  }
}
