import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIResponse } from '../APIResponse';
import { ToasterService } from '../Services/toaster.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  searchWord: string = '';
  users: any[];

  constructor(private httpClient: HttpClient,
    private toastr: ToasterService,
    private userservice: UserService) { }

  ngOnInit(): void {
    this.getUsers();

  }



  getUsers() {
    let request: any = {};
    let response: APIResponse;



    this.userservice.getUsers(request).then((data: APIResponse) => {
      response = data;
      if (response != undefined && response != null) {
        if (response.ReturnCode == 0) {
           this.users = response.Data

        }
        else if (response.ReturnCode == 8) {
          //No records found.
          this.users = null;
          this.toastr.warningPushNotification("No Users found.");
        }
        else {
          // Do logic for error msg
          this.users = null;
          this.toastr.errorPushNotification(response.ReturnMessage);

        }
      }
    })
      .catch(error => {
        console.warn('from Users component :', error);
        // this console warn never gets logged out
        this.toastr.errorPushNotification(error);

      });

  }

}
