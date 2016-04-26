import {Injectable} from "angular2/core";
import appSettings = require('application-settings');
import {Http} from "angular2/http";


@Injectable()
export class ConfigService {


	constructor(private _http: Http){}
	

	setHost(host:string){
		appSettings.setString("host",host);
	}

	getHost(){
		return appSettings.getString("host");
	}

	setAccessToken(accessToken:string){
		appSettings.setString("access_token", accessToken);
	}

	getAccessToken(){
		return appSettings.getString("access_token")
	}

	setRefreshToken(refreshToken:string){
		appSettings.setString("refresh_token", refreshToken);
	}

	getRefreshToken(){
		return appSettings.getString("refresh_token")
	}

	clear(){
		appSettings.clear();
	}


}