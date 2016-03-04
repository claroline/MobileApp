import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {User} from "./user";
import {Config} from "../config";
import "rxjs/add/operator/map";

"use strict";
const CLIENT_ID = "1_49psizc7y8kko4w8w4w0w8c8w8cwscwc8owg8wgk4w8ww0owg8";
const CLIENT_SECRET = "2swn3xys6vwgkg0w0kkg8sowc84kscswg8w84ckko8c8oswgow";


@Injectable()
export class UserService {


  constructor(private _http: Http) {}

  login(user: User) {

    let headers = new Headers();
    headers.append("Content-Type","application/json");
    let body = JSON.stringify({
      client_id : CLIENT_ID,
      client_secret : CLIENT_SECRET,
      grant_type : "password",
      username : user.username,
      password : user.password
    });
    return this._http.post(
      Config.apiUrl + "oauth/v2/token",
      body,
      {headers : headers}
    );
  }

  refreshToken(){
    let headers = new Headers();
    headers.append("Content-Type","application/json");
    let body = JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: Config.refresh_token
    });
    return this._http.post(
      Config.apiUrl + "oauth/v2/token",
      body,
      { headers: headers }
    )
      .subscribe(
        (data) => {
          Config.access_token = data.json().access_token;
          Config.refresh_token = data.json().refresh_token;
        }
      );
  }

  getNotifications(){
    alert("COUCOU");
  }

  
}