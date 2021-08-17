import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../APIResponse';
import { LoginResponse } from '../Models/login';
import { AuthService } from '../Services/auth.service';
import { ToasterService } from '../Services/toaster.service';



class LoginModel {
  UserEmail: string;
  UserPassword: string;


  constructor(UserEmail: string = '',
    UserPassword: string = '') {

    this.UserEmail = UserEmail;
    this.UserPassword = UserPassword;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginModel = new LoginModel();

  loginUserResponse: LoginResponse = new LoginResponse();



  constructor(private httpClient: HttpClient,
    private authservice: AuthService,
    private toastr: ToasterService,
    private router: Router) {
    console.log(environment.APIURL);

  }


  ngOnInit(): void {
    if (localStorage.getItem('Token')) {
      let token = JSON.parse(localStorage.getItem('Token') || '');
      if (token != undefined && token != '' && token.length > 0) {
        this.router.navigate(['/home']);

      }
    }
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.login();
    }
  }


  login() {
    let request: any = {};
    let response: APIResponse;

    request.UserEmail = this.model.UserEmail;
    request.UserPassword = this.model.UserPassword


    this.authservice.login(request).then((data: APIResponse) => {
      response = data;
      if (response != undefined && response != null) {
        if (response.ReturnCode == 0) {
          //console.log(response.Data);
          let objresponse: any = response.Data;
          this.loginUserResponse = <LoginResponse>objresponse;  //Casting
          localStorage.setItem('UserInfo', JSON.stringify(this.loginUserResponse));
          localStorage.setItem('Token', JSON.stringify(this.loginUserResponse.Token));
          this.router.navigate(['/home']);

        }
        else if (response.ReturnCode == 5) {
          // User not found in DB or Ananymous user
          this.toastr.warningPushNotification("Invalid credentials.");

        }
        else {
          this.toastr.errorPushNotification("Login failed.");
        }
      }
      else {
        this.toastr.errorPushNotification("Login failed.!");
      }
    })
      .catch(error => {
        console.warn('from site-hearder component:', error);
        this.toastr.errorPushNotification("something went wrong."+ error);
        // this console warn never gets logged out
      });

  }



}
