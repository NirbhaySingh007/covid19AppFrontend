import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../userModule/login/login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  isLoggedIn:boolean=true;
  ngOnInit(): void {
  }
  
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    location.reload()}

}
