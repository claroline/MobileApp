import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "./user";
import "rxjs/add/operator/map";
import {ConfigService} from "../config.service";

"use strict";


@Injectable()
export class UserService {



    constructor(private _http: Http,
        private _configService:ConfigService) { }

    buildHeader() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    }

    login(user: User) {
        let clientId = this._configService.getClientId();
        let clientSecret = this._configService.getClientSecret();
        let headers = this.buildHeader();
        let body = JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: "password",
            username: user.username,
            password: user.password
        });
        let host = this._configService.getHost();
        return this._http.post(
            host + "/oauth/v2/token",
            body,
            { headers: headers }
            );
    }

    refreshToken() {
        let clientId = this._configService.getClientId();
        let clientSecret = this._configService.getClientSecret();
        let headers = this.buildHeader();
        let refresh = this._configService.getRefreshToken();
        let body = JSON.stringify({
            client_id: clientId,
            client_secret: clientId,
            grant_type: "refresh_token",
            refresh_token: refresh
        });
        let host = this._configService.getHost();
        this._http.post(
            host + "/oauth/v2/token",
            body,
            { headers: headers }
            )
        .subscribe(
            (data) => {
                this._configService.setAccessToken(data.json().access_token);
                this._configService.setRefreshToken(data.json().refresh_token);
                this._configService.expire(false);
            });
    }

    isTokenExpired(){
      let host = this._configService.getHost();
      let url = host + "/client/expired.json";

      return this._http.get(url)
      .map(res=>res.json())
      .subscribe(data=>{
        this._configService.expire(data.hasExpired);
      });
    }







}
