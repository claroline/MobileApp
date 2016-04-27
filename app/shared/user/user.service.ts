import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {User} from "./user";
import {Config} from "../config";
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

        let headers = this.buildHeader();
        let body = JSON.stringify({
            client_id: Config.client_id,
            client_secret: Config.client_secret,
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
        let headers = this.buildHeader();
        let refresh = this._configService.getRefreshToken();
        let body = JSON.stringify({
            client_id: Config.client_id,
            client_secret: Config.client_secret,
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
                //Config.access_token = data.json().access_token;
                //Config.refresh_token = data.json().refresh_token;
                this._configService.setAccessToken(data.json().access_token);
                this._configService.setRefreshToken(data.json().refresh_token);
            }
            );
    }

    


}