"use strict";

import {Component} from "@angular/core";
import {Router, CanActivate} from '@angular/router'
import {ConfigService} from "../../shared/config.service";
import {UserService} from "../../shared/user/user.service";
import {appInjector} from "../../app-injector";

// @CanActivate((next, prev) => {
//   let injector = appInjector();
//   let router = injector.get(Router);
// 	let config = injector.get(ConfigService);
//   let userService = injector.get(UserService);
//
//   userService.isTokenExpired();
//
//
//
//   if (config.hasKey("host") && config.isExpired()) {
//     router.navigate(['Login']);
//     return false;
//   } else if (config.hasKey("host") && !config.isExpired() ){
//     router.navigate(['Home']);
//     return false;
//   } else {
//     return true;
//   }
//
//
// })
@Component({
	selector:'list',
	templateUrl:'pages/platformsList/list.html',
	providers:[ConfigService]
})


export class ListPage {

	host:string;


	constructor(private _router:Router, private _configService: ConfigService){
	}


	goToLogin(){
		if (this.host === undefined){
			alert("Vous avez oublié d'entrer l'url !");
		} else {
			this._configService.setHost(this.host);
			this._configService.getClientIdAndSecretFromHost()
			.subscribe(data=>{
				this._configService.setClientId(data.client_id);
				this._configService.setClientSecret(data.client_secret);
				this._router.navigate(['/login']);
			}, err=>{
				alert("Entrez une url valide.");
			});
		}
	}


}
