import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/Services/toaster.service';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  constructor(private router: Router, private toastr: ToasterService,) { }

  ngOnInit(): void {
  }

  logout() {
    if (localStorage.getItem('Token')) {
      localStorage.removeItem('Token');
      this.toastr.successPushNotification("Successfully Logout.");

      this.router.navigate(['/login']);

    }


  }

}
