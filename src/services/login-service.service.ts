import { HttpClient } from '@angular/common/http';
import { typeSourceSpan } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url="http://localhost:8090"
  constructor(private http:HttpClient) { }


  generateToken(credentials:any)
  {
    return this.http.post(`${this.url}/token`,credentials);
  }



  //or login user
  loginUser(token)
  {
    localStorage.setItem("token",token);
    return true;
  }


  isloggedIn()
  {
    let token=localStorage.getItem("token");
    if(token == undefined || token === '' || token == null)
    {
      console.log("not null");
      return false;
    }
    else
    {
      return true;
    }
  }

  
  logout()
  {
    localStorage.removeItem('token');
    return true;
  }

  getToken()
  {
    return localStorage.getItem("token");
  }

}
