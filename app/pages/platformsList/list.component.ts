import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {ConfigService} from "../../shared/config.service";

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

		this._configService.setHost(this.host);
		this._configService.getClientIdAndSecretFromHost()
			.subscribe(data=>{
				this._configService.setClientId(data.client_id);
				this._configService.setClientSecret(data.client_secret);
			});

		this._router.navigate(['Login']);
	}
}