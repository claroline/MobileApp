import {Injectable} from "angular2/core";
import {Config} from "../config";
import {Notification} from "./notification";
import {Observable} from "rxjs/Rx";
import {Http} from "angular2/http";

"use strict";

@Injectable()
export class NotificationsService {
    constructor(private _http: Http) { }

    //Load all the notifications of a specific user
    load() {

        let url = Config.apiUrl + "icap_notification/api/notifications.json?access_token=" + Config.access_token;
        return this._http.get(url)
            .map(res => {
                return res.json();
            })
            .map(data => {
                let result = [];


                data.forEach((notif) => {


                    let doer = notif.notification.details.doer.firstName + " " + notif.notification.details.doer.lastName;
                    let actionKey = notif.notification.action_key;
                    let role = notif.notification.details.role.name;
                    let workspace = notif.notification.details.workspace.name;
                    result.push(new Notification(notif.id, doer, actionKey, role, workspace));
                });

                return result;
            });

    }



}
