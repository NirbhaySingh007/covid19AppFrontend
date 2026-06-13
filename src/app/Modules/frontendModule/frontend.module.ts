import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  
  imports: [
    CommonModule
  ],
  
  declarations: [
  
  
  
    AboutComponent,
             ContactComponent,
             ProfileComponent
  ]
})
export class FrontendModule { }
