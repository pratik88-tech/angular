import { Injectable } from '@angular/core';
import { USER } from '../mock/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user=USER;
  constructor() { }
  login(payload:any){
    if(payload.username==this.user.username && payload.password==this.user.password){
      return this.user;
    }else{
      return null;
    }
  }
  isLoggedin(){
    if(sessionStorage.getItem('user')){
      return true
    }else{
      return false;
    }
  }
}
