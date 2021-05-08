import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  credentials={
    userId:'',
    password:''
  }

  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    //console.log(" form is submitted ");
    if((this.credentials.userId!='' && this.credentials.password!='')&& (this.credentials.userId!=null && this.credentials.password!=null))
    {
      console.log("we have to submit the form to server");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log(response.token);
          this.loginService.loginUser(response.token);
            window.location.href="/admin/dashboard";
        },
        error=>{
          console.log(error);
        }
      )

      //subscribe(Response=>{{console.log("response")}},error=>{{console.log("error")}})
    }
    else
    {
      console.log("fields are empty");  
    }
  }
}
 