import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { PMainComponent } from './patient/p-main/p-main.component';
import { DMainComponent } from './doctor/d-main/d-main.component';
import { AMainComponent } from './admin/a-main/a-main.component';

import { PProfileComponent } from './patient/p-profile/p-profile.component';
import { PAppointmentComponent } from './patient/p-appointment/p-appointment.component';
import { PPaymentComponent } from './patient/p-payment/p-payment.component';
import { PReportComponent } from './patient/p-report/p-report.component';
import { PHelpComponent } from './patient/p-help/p-help.component';
import { PSignoutComponent } from './patient/p-signout/p-signout.component';
import { PAddAppointmentComponent } from './patient/p-add-appointment/p-add-appointment.component';
import { PDoctorProfileComponent } from './patient/p-doctor-profile/p-doctor-profile.component';
import { DSchedulesComponent } from './doctor/d-schedules/d-schedules.component';
import { ADoctorComponent } from './admin/a-doctor/a-doctor.component';
import { APatientsComponent } from './admin/a-patients/a-patients.component';
import { HMainComponent } from './home/h-main/h-main.component';
import { DProfileComponent } from './doctor/d-profile/d-profile.component';
import { PPrescriptionComponent } from './patient/p-prescription/p-prescription.component';
import { PatientComponent } from './user/login/patient/patient.component';
import { AdminComponent } from './user/login/admin/admin.component';
import { APaymentsComponent } from './admin/a-payments/a-payments.component';
import { DoctorComponent } from './user/login/doctor/doctor.component';
import { ADUpdateComponent } from './admin/a-d-update/a-d-update.component';
import { ADAddComponent } from './admin/a-d-add/a-d-add.component';
import { ReceptionistLoginComponent } from './user/login/receptionist/receptionist-login/receptionist-login.component';


const routes: Routes = [

  { path: '', component: HMainComponent },

  { path: 'login', component: LoginComponent},

  // patient routes
  { path: 'patient/login', component: PatientComponent},
  { path: 'patient', component: PMainComponent},
  { path: 'patient/profile', component: PProfileComponent},
  { path: 'patient/appointment', component: PAppointmentComponent},
  { path: 'patient/report', component: PReportComponent},
  { path: 'patient/payments', component: PPaymentComponent},
  { path: 'patient/help', component: PHelpComponent},
  { path: 'patient/signout', component: PSignoutComponent},
  { path: 'patient/appointment/add', component: PAddAppointmentComponent },
  { path: 'patient/doctor/profile', component: PDoctorProfileComponent},
  { path: 'patient/prescription', component: PPrescriptionComponent},

  // receptionist routes
  { path: 'receptionist/login', component: ReceptionistLoginComponent },
 


  // admin routes
  { path: 'admin', component: AMainComponent },
  { path: 'admin/login', component: AdminComponent },
  { path: 'admin/doctors', component: ADoctorComponent},
  { path: 'admin/patients', component: APatientsComponent },
  { path: 'admin/payments', component: APaymentsComponent },
  { path: 'admin/doctor/edit/:id', component: ADUpdateComponent },
  { path: 'admin/doctor/add', component: ADAddComponent },
  
  // doctor routes
  { path: 'doctor', component: DMainComponent },
  { path: 'doctor/login', component: DoctorComponent },
  { path: 'doctor/schedules', component: DSchedulesComponent },
  { path: 'doctor/profile', component: DProfileComponent },

  { path: '**', redirectTo:'' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
