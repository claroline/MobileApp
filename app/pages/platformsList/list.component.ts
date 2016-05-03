"use strict";

import {Component} from "angular2/core";
import {Router, CanActivate} from "angular2/router";
import {ConfigService} from "../../shared/config.service";
import {appInjector} from "../../app-injector";

@CanActivate((next, prev) => {
  let injector = appInjector();
  let router = injector.get(Router);
	let config = injector.get(ConfigService);

  if (config.hasKey("host")) {
    router.navigate(['Login']);
    return false;
  }

  return true;
})
@Component({
	selector:'list',
	templateUrl:'pages/platformsList/list.html',
	providers:[ConfigService]
})


export class ListPage {

	host:string;


	constructor(private _router:Router, private _configService: ConfigService){
		// if (this._configService.hasKey("host")){
		// 	this._router.navigate(['Login']);
		// }
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
				this._router.navigate(['Login']);
			}, err=>{
				alert("L'url que vous avez entrée n'est pas valide !");
			});
		}
	}
}
