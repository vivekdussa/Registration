import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';

const routes: Routes = [
  {path:'',component:EmployeeRegistrationComponent},
  {path:'registration',component:EmployeeRegistrationComponent},
  {path:'employee_details',component:EmployeeListingComponent},
  {path:'**',redirectTo:'/registration'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
