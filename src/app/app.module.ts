import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './user/login/login.component';

import { PMainComponent } from './patient/p-main/p-main.component';
import { PSiderbarComponent } from './patient/p-siderbar/p-siderbar.component';
import { PProfileComponent } from './patient/p-profile/p-profile.component';
import { PPaymentComponent } from './patient/p-payment/p-payment.component';
import { PReportComponent } from './patient/p-report/p-report.component';
import { AMainComponent } from './admin/a-main/a-main.component';
import { DMainComponent } from './doctor/d-main/d-main.component';
import { DSidebarComponent } from './doctor/d-sidebar/d-sidebar.component';
import { DProfileComponent } from './doctor/d-profile/d-profile.component';
import { DSchedulesComponent } from './doctor/d-schedules/d-schedules.component';
import { PAppointmentComponent } from './patient/p-appointment/p-appointment.component';
import { PHelpComponent } from './patient/p-help/p-help.component';
import { PSignoutComponent } from './patient/p-signout/p-signout.component';
import { PAddAppointmentComponent } from './patient/p-add-appointment/p-add-appointment.component';
import { PDoctorProfileComponent } from './patient/p-doctor-profile/p-doctor-profile.component';
import { ASidebarComponent } from './admin/a-sidebar/a-sidebar.component';
import { ADoctorComponent } from './admin/a-doctor/a-doctor.component';
import { APatientsComponent } from './admin/a-patients/a-patients.component';
import { APaymentsComponent } from './admin/a-payments/a-payments.component';
import { HMainComponent } from './home/h-main/h-main.component';
import { PNavbarComponent } from './patient/p-navbar/p-navbar.component';
import { DNavbarComponent } from './doctor/d-navbar/d-navbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PPrescriptionComponent } from './patient/p-prescription/p-prescription.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientComponent } from './user/login/patient/patient.component';
import { DoctorComponent } from './user/login/doctor/doctor.component';
import { AdminComponent } from './user/login/admin/admin.component';
import { ANavbarComponent } from './admin/a-navbar/a-navbar.component';
import { ADUpdateComponent } from './admin/a-d-update/a-d-update.component';
import { ADAddComponent } from './admin/a-d-add/a-d-add.component';
import { ReceptionistLoginComponent } from './user/login/receptionist/receptionist-login/receptionist-login.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PMainComponent,
    PSiderbarComponent,
    PProfileComponent,
    PPaymentComponent,
    PReportComponent,
    AMainComponent,
    DMainComponent,
    DSidebarComponent,
    DProfileComponent,
    DSchedulesComponent,
    PAppointmentComponent,
    PHelpComponent,
    PSignoutComponent,
    PAddAppointmentComponent,
    PDoctorProfileComponent,
    ASidebarComponent,
    ADoctorComponent,
    APatientsComponent,
    APaymentsComponent,
    HMainComponent,
    PNavbarComponent,
    DNavbarComponent,
    PPrescriptionComponent,
    PatientComponent,
    DoctorComponent,
    AdminComponent,
    ANavbarComponent,
    ADUpdateComponent,
    ADAddComponent,
    ReceptionistLoginComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
