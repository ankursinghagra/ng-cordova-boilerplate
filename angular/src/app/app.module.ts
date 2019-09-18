import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './_services/base/base.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './_services/alert/alert/alert.component';

const routes: Routes = [
	{
		path: '', redirectTo: 'home', pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
  	{
    	path: "**", redirectTo: 'home'
  	}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
    	useHash : true,
    }),
    HttpClientModule
  ],
  providers: [
  	BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
