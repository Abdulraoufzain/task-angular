import { Routes, provideRouter } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { RoomsComponent } from './rooms/rooms.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  { path: 'patients', component: PatientsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'rooms', component: RoomsComponent },
  {path: 'login', component: LoginComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const appRoutingProviders = [
  provideRouter(routes)
];

 