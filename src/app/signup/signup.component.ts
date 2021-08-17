import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { APIResponse } from '../APIResponse';
import { AuthService } from '../Services/auth.service';
import { ToasterService } from '../Services/toaster.service';



class SignModel {
  FirstName: string;
  LastName: string;
  UserEmail: string;
  UserPassword: string;


  constructor(FirstName: string = '',
    LastName: string = '',
    UserEmail: string = '',
    UserPassword: string = '') {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.UserEmail = UserEmail;
    this.UserPassword = UserPassword;
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  model: SignModel = new SignModel();

  constructor(private httpClient: HttpClient,
    private authservice: AuthService,
    private toastr: ToasterService,
    private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.signup();
    }
  }


  
  signup() {
    let request: any = {};
    let response: APIResponse;

    request.FirstName = this.model.FirstName;
    request.LastName = this.model.LastName;
    request.UserEmail = this.model.UserEmail;
    request.UserPassword = this.model.UserPassword


    this.authservice.signup(request).then((data: APIResponse) => {
      response = data;
      if (response != undefined && response != null) {
        if (response.ReturnCode == 0) {
          //console.log(response.Data);
          this.toastr.successPushNotification("Signed-up successfully.");
          this.router.navigate(['/login']);

        }
        else {
          this.toastr.errorPushNotification("registration failed.");
        }
      }
      else {
        this.router.navigate(['/notfound']);
      }
    })
      .catch(error => {
        console.warn('from signup component:', error);
        this.toastr.errorPushNotification("something went wrong."+ error);

        // this console warn never gets logged out
      });

  }




}
