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
        client_id : "1_4li11e6wsm0woo8ws0s0c8s0oc00gwwoggwgc0wo88o0gkos08",
        client_secret : "55zefc59r6o08cgk4okk80www4kkwwwk04gcw0s4wggkow0gc4",
        grant_type: "password",
        username: user.username,
        password: user.password,
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