import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(
    private auth:AuthService,
    private router:Router
    ) { }
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      "username":new FormControl(''),
      "password":new FormControl('')
    })
  }
  submitLoginForm(){
    // console.log(this.loginForm.value)
    let res=this.auth.login(this.loginForm.value);
    if(res!=null){
      sessionStorage.setItem('user',JSON.stringify(res))
      this.router.navigate(['/dashboard']);
    }else{
      alert("Invalid user")
    }
  }

}
