import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {Config} from "../../shared/config";

import appSettings = require('application-settings');

@Component({
	selector:'list',
	templateUrl:'pages/platformsList/list.html'
})

export class ListPage {

	host:string;

	constructor(private _router:Router){

	}

	goToLogin(){
		Config.apiUrl = this.host;
		appSettings.setString("host",this.host);
		this._router.navigate(['Login']);
	}
}