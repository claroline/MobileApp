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
    //headers.append("Content-Type","application/x-www-form-urlencoded");
    headers.append("Content-Type","application/json");

    let client_id = "1_4li11e6wsm0woo8ws0s0c8s0oc00gwwoggwgc0wo88o0gkos08";
    let client_secret = "55zefc59r6o08cgk4okk80www4kkwwwk04gcw0s4wggkow0gc4";
    let grant_type = "password";
    let url = Config.apiUrl+"oauth/v2/token";
    //let body = "client_id="+client_id+"&client_secret="+client_secret+"&grant_type="+grant_type+"&username="+user.username+"&password="+user.password;
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