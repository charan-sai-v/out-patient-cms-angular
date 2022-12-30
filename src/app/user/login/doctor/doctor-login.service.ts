import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DoctorLoginService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any>{
    return this.http.post('http://localhost:2040/doctor/login', data);
  }
}
