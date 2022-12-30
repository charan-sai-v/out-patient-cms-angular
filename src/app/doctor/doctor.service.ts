import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  viewPatientRequests(id: any): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:2040/api/doctor/appointments?id=${id}`)
  }


  viewSchedules(id: any): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:2040/api/doctor/schedules?id=${id}`)
  }

  getDoctorByEmail(email: any){
    return this.http.get(`http://localhost:2040/api/doctor/?email=${email}`)
  }

  
}
