import { Injectable } from '@angular/core';
declare var $ :any, jQuery : any;

@Injectable({
  providedIn: 'root'
})
export class AlertService {

 	constructor() { }

  	alertMsg(status,msg)
  	{
  		$(".alert-msg")
  			.removeClass('alert-success')
  			.removeClass('alert-danger')
  			.removeClass('alert-info')
  			.addClass('alert-'+status)
  			.html(msg)
  			.fadeIn(300);

        setTimeout(function(){
            $(".alert-msg").fadeOut(300);
        },700);
	}
}
