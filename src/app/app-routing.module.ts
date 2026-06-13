import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AboutComponent } from './about/about.component';
import { LoginGuard } from './gaurds/login.guard';
import { SearchByCountryComponent } from './Modules/applicationModule/components/search-by-country/search-by-country.component';
import { DashboardComponent } from './Modules/frontendModule/dashboard/dashboard.component';
import { WatchComponent } from './Modules/frontendModule/watch/watch.component';


import { LoginComponent } from './Modules/userModule/login/login.component';
import { RegisterComponent } from './Modules/userModule/register/register.component';
import { AboutComponent } from './Modules/frontendModule/about/about.component';
import { ContactComponent } from './Modules/frontendModule/contact/contact.component';

const routes: Routes = [
  {
     path: '', component: LoginComponent 
    },
  
  {
    path: 'dashboard',component: DashboardComponent , canActivate:[LoginGuard]
  },
  {
    path: 'register',component: RegisterComponent
  },
  {
    path: 'watch', component:WatchComponent , canActivate:[LoginGuard]
  },
  {
    path: 'logout', component: LoginComponent 
  },
  {
    path: 'about', component:AboutComponent, canActivate:[LoginGuard]
  },
  {
    path: 'contact', component:ContactComponent, canActivate:[LoginGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }