import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {User} from "./user";
import {Config} from "../config";
import "rxjs/add/operator/map";



@Injectable()
export class UserService {
  constructor(private _http: Http) {}

  login(user: User) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    return this._http.post(
      Config.apiUrl + "oauth/v2/token",
      JSON.stringify({
        username: user.username,
        password: user.password,
        grant_type: "password",
        client_id: "427148477482-rr9vl5g6cgtam2afro3l4vne3mpkoo1b.apps.googleusercontent.com"
      }),
      { headers: headers }
    )
    .map(res => res.json())
    .map(data => {
      // TODO: This shouldn’t be necessary
      data = JSON.parse(data);

      Config.token = data.Result.access_token;
    });
  }

  
}