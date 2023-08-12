import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EnquireFormComponent } from './enquire-form/enquire-form.component';

const routes: Routes = [
  {path : '' , redirectTo : 'enquiry' , pathMatch : 'full'},
  {path : 'login' , component : LoginComponent},
  {
    path : 'dashboard' , component : DashboardComponent
  },
  {path : 'enquiry' , component : EnquireFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
