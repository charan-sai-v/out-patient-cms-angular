import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './admin';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class AdminService {
 
  baseURL: string = "http://localhost:2040/admin/login";
 
  constructor(private http: HttpClient) { }

  login(data:any): Observable<any>{
    return this.http.post(this.baseURL,data)
  }

}