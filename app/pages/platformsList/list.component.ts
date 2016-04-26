import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {Config} from "../../shared/config";
import {ConfigService} from "../../shared/config.service";

@Component({
	selector:'list',
	templateUrl:'pages/platformsList/list.html',
	providers:[ConfigService]
})

export class ListPage {

	host:string;


	constructor(private _router:Router, private _configService: ConfigService){
		/*if (this._configService.getHost() !== undefined){
			this._router.navigate(['Login']);
		}*/


	}

	goToLogin(){

		//On s'assure que le dernier caractère de l'url est un slash
		if (this.host.slice(-1) !== "/"){
			this.host = this.host+"/";
		}
		this._configService.setHost(this.host);
		this._router.navigate(['Login']);
	}
}