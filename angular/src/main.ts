import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare var jquery:any, $:any;

function bootstrap() {
	$('.first-page-loading').hide();
	platformBrowserDynamic().bootstrapModule(AppModule)
	  .catch(err => console.error(err));
};

if (window['cordova']) {
  	console.log('This is Angular Running on Cordova');
  	document.addEventListener('deviceready', () => bootstrap());
} else {
  	console.log('This is Angular on Web');
  	bootstrap();
}