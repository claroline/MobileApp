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
    load(type:string = null) {
        let notifications = 'notifications';
        if (type !=null){
            notifications += '/read';
        }

        let url = Config.apiUrl + "icap_notification/api/"+notifications+".json?access_token=" + Config.access_token;
        return this._http.get(url)
        .map(res => {
            return res.json();
        })
        .map(data => {
            let result = [];
            data.forEach((notif) => {

                let id = notif.notification.id;

                let doer = undefined;
                if (notif.notification.details.doer !== undefined) {
                    doer = notif.notification.details.doer.firstName + " " + notif.notification.details.doer.lastName;
                }

                let role = undefined;
                if (notif.notification.details.role !== undefined) {
                    role = notif.notification.details.role.name;
                }

                let actionKey = notif.notification.action_key;

                let workspace = undefined;
                if (notif.notification.details.workspace !== undefined) {
                    workspace = notif.notification.details.workspace.name;
                }

                let resource = undefined;
                if (notif.notification.details.resource !== undefined) {
                    resource = notif.notification.details.resource.name;
                }

                let status = notif.status;
                let text = "";
                switch (actionKey) {
                    case "badge-award": text = "Badges";
                    break;
                    case "registration-decline": text = doer + " vous a refusé l'inscription à l'espace d'activité "+workspace;
                    break;
                    case "resource-create": text = doer+" a créé la ressource "+resource+" dans l'espace d'activité "+workspace;
                    break;
                    case "role-change_right": text = "Accès ressource";
                    break;
                    case "role-subscribe": text = "Nouvelle inscription";
                    break;
                    case "role-subscribe_group":
                    case "role-subscribe_user": text = doer + " vous a attribué le rôle " + role;
                    break;
                    case "workspace-registration-decline": text = doer + " a refusé votre demande d'inscription dans l'espace d'activités " + workspace;
                    break;
                    case "workspace-role-change_right": text = doer + " vous donne accès à la ressource " + resource + " dans l'espace d'activités " + workspace;
                    break;
                    case "workspace-role-subscribe_user":
                    case "workspace-role-subscribe_group": text = doer + " vous a attribué le rôle " + role + " dans l'espace d'activités " + workspace;
                    break;
                    case "resource_creation_notification_message": text = doer + " a créé la ressource " + resource + " dans l'espace d'activités " + workspace;
                    break;
                    case "role-subscribe-queue": text = doer + " a fait une demande d'inscription dans l'espace d'activtés " + workspace;
                    break;
                    case "text_update_notification_message": text = doer + " a modifié le texte " + resource + " de l'espace d'activités " + workspace;
                    break;
                    case "resource-text": text = "Textes";
                    break;
                    default:
                    break;
                }

                result.push(new Notification(id,status, text));
            });
            return result;
        });
    }

    
}
