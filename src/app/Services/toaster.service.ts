import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }



  successPushNotification(message: string) {
    this.toastr.success(message, '', { positionClass: 'toast-top-center', closeButton: true, timeOut: 3000 });
  }

  errorPushNotification(message: string) {
    this.toastr.error(message, '', { positionClass: 'toast-top-center', closeButton: true, timeOut: 3000 });
  }

  warningPushNotification(message: string) {
    this.toastr.warning(message, '', { positionClass: 'toast-top-center', closeButton: true, timeOut: 3000 });
  }

  infoPushNotification(message: string) {
    this.toastr.info(message, '', { positionClass: 'toast-top-center', closeButton: true, timeOut: 3000 });
  }
}
