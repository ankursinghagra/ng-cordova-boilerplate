import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BaseService } from './_services/base/base.service';
import { AlertService } from './_services/alert/alert.service';

declare var $ :any, jQuery : any;
declare var navigator;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter=0;

  constructor(
    private _router:Router, 
    private _location: Location,
    private _ngzone:NgZone,
    private _alertService:AlertService,
    private _baseService:BaseService,
    ){
  }

  ngOnInit() {
    /*if (this._baseService.LoggedIn()) {
      this._router.navigate(['/flat-panel/']);
    }*/
    document.addEventListener('backbutton', this.onBackKeyDown, false);
  }

  onBackKeyDown = (e): void => {
    let path = this._location.path();
    if ((path=='/login')||(path=='/login/signin')||(path=='/home')) {
      if (this.counter == 0) {
        this.counter++;
        this._alertService.alertMsg('info','Press again to exit');
        setTimeout(() => { this.counter = 0 }, 3000)
      } else {
        this.exitAppAndroidOnly();
      }
    }
    //this._ngzone.run( data => {
      this._location.back();
      //navigator.app.backHistory();
      console.log("BACK BUTTON CALLED");
    //});
  }
  exitAppAndroidOnly() {
      if (navigator.app) {
          navigator.app.exitApp();
      } else if (navigator.device) {
          navigator.device.exitApp();
      } else {
          window.close();
      }
  }
}
