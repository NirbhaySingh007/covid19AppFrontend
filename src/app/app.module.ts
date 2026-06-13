import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './Modules/frontendModule/navigation/navigation.component';
import { LoginComponent } from './Modules/userModule/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './Modules//frontendModule/dashboard/dashboard.component';
import { RegisterComponent } from './Modules//userModule/register/register.component';
import { SearchByCountryComponent } from './Modules/applicationModule/components/search-by-country/search-by-country.component';
import { ListCountryCoviddataComponent } from './Modules//watchlistModule/list-country-coviddata/list-country.coviddata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WatchComponent } from './Modules/frontendModule/watch/watch.component';

import { AuthenticationInterceptor } from './request.interceptor';
import { AboutComponent } from './Modules/frontendModule/about/about.component';
import { ContactComponent } from './Modules/frontendModule/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    SearchByCountryComponent,
    ListCountryCoviddataComponent,
    WatchComponent,
    AboutComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApplicationModule,
    BrowserAnimationsModule,
   
    
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthenticationInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
