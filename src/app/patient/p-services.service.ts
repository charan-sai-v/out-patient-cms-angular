import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Doctor } from './p-appointment/Doctors';

@Injectable({
  providedIn: 'root'
})
export class PServicesService {

  constructor(private http: HttpClient) { }

  getpatientData(email:any): Observable<any>{
    return this.http.get(`http://localhost:2040/api/patient?email=${email}`)
  }

  searchByDoctors(query: any): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`http://localhost:2040/api/patient/doctors?query=${query}`)
  }

  viewAllDoctor(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`http://localhost:2040/api/patient/doctors`)
  }

  appointment(data: any): Observable<any>{
    return this.http.post('http://localhost:2040/api/patient/appointment/add', data)
  }

  signOut(){
    localStorage.clear();
}
}
