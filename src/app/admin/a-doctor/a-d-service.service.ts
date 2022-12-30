import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor, ViewDoctor } from './DoctorList';
import { Observable } from 'rxjs'
import { CreateDoctor } from '../a-d-add/doctor';

@Injectable({
  providedIn: 'root'
})
export class ADServiceService {
  private baseUrl = 'http://localhost:2040/admin/doctors'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.baseUrl)
  }

  get(id: any): Observable<Doctor>{
    return this.http.get<ViewDoctor>(this.baseUrl+`/${id}`)
  }

  delete(id: any): Observable<any>{
    return this.http.delete('http://localhost:2040/admin/doctor/'+id)
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put('http://localhost:2040/admin/doctor/'+id, data)
  }

  add(data: any): Observable<any>{
    return this.http.post('http://localhost:2040/admin/doctor/add', data)
  }

  searchByQuery(query: any): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.baseUrl)
  }
}
