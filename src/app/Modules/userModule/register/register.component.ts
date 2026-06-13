import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/User';
import { AuthenticationService } from 'src/app/service/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  IdCtrl: FormControl;
  userNameCtrl: FormControl;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  myform: FormGroup;
  constructor(builder: FormBuilder, private service: AuthenticationService,private router:Router ) {
    this.IdCtrl=builder.control('');
    this.userNameCtrl = builder.control('');
    this.emailCtrl=builder.control('');
    this.passwordCtrl = builder.control('');
    this.myform = builder.group({
      id: this.IdCtrl,
      username: this.userNameCtrl,
      email: this.emailCtrl,
      password: this.passwordCtrl
      
    });
  }

  ngOnInit(): void {
  }

  register() {
    const Id=this.IdCtrl.value;
    const userName=this.userNameCtrl.value;
    const email=this.emailCtrl.value;
    const password=this.passwordCtrl.value;
    console.log(Id);
    console.log(userName);
    console.log(email);
    console.log(password);
    const observer={
      next:(result:any)=>{
        alert("Successfully registered");
        this.router.navigate(['']);
      },
      error:(error:Error)=>{
        alert("Couldn't register "+error.message);
      }

    }
    const observable:Observable<any>=this.service.register(Id,userName,email,password);
    observable.subscribe(observer);
    
  }

}
