import {Injectable} from "@angular/core";
import appSettings = require('application-settings');
import {Http} from "@angular/http";


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

	setClientId(clientId:string){
		appSettings.setString("client_id", clientId);
	}

	getClientId(){
		return appSettings.getString("client_id");
	}

	setClientSecret(clientSecret:string){
		appSettings.setString("client_secret", clientSecret);
	}

	getClientSecret(){
		return appSettings.getString("client_secret");
	}

	remove(key:string){
		appSettings.remove(key);
	}

	hasKey(key:string){
		return appSettings.hasKey(key);
	}


	getClientIdAndSecretFromHost(){
		let host = this.getHost();
		let url = host + "/client/idsecret.json";
		return this._http.get(url)
			.map(res => {
				return res.json();
			});
	}

	clear(){
		appSettings.clear();
	}

	expire(expired : boolean){
		appSettings.setBoolean("hasExpired",expired);
	}

	isExpired(){
		return appSettings.getBoolean("hasExpired");
	}


}
