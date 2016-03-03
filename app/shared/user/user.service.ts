import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {User} from "./user";
import {Config} from "../config";
import "rxjs/add/operator/map";

"use strict";


@Injectable()
export class UserService {
  constructor(private _http: Http) {}

  login(user: User) {

    let headers = new Headers();
    headers.append("Content-Type","application/json");
    let client_id = "1_49psizc7y8kko4w8w4w0w8c8w8cwscwc8owg8wgk4w8ww0owg8";
    let client_secret = "2swn3xys6vwgkg0w0kkg8sowc84kscswg8w84ckko8c8oswgow";
    let grant_type = "password";
    let url = Config.apiUrl+"oauth/v2/token";
    let body = JSON.stringify({
      client_id : client_id,
      client_secret : client_secret,
      grant_type : grant_type,
      username : user.username,
      password : user.password
    });
    return this._http.post(
      url,
      body,
      {headers : headers}
    );
  }

  getNotifications(){
    alert("COUCOU");
  }

  
}