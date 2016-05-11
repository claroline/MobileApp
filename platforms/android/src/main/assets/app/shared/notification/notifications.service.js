"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var notification_1 = require("./notification");
var http_1 = require("@angular/http");
var config_service_1 = require("../config.service");
"use strict";
var NotificationsService = (function () {
    function NotificationsService(_http, _configService) {
        this._http = _http;
        this._configService = _configService;
    }
    //Load all the notifications of a specific user
    NotificationsService.prototype.load = function (type) {
        if (type === void 0) { type = null; }
        var notifications = 'notifications';
        if (type != null) {
            notifications += '/read';
        }
        var host = this._configService.getHost();
        var access = this._configService.getAccessToken();
        var url = host + "/icap_notification/api/" + notifications + ".json?access_token=" + access;
        return this._http.get(url)
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            if (data.length == 0) {
                return;
            }
            var result = [];
            data.forEach(function (notif) {
                var id = notif.notification.id;
                var doer = undefined;
                if (notif.notification.details.doer !== undefined) {
                    doer = notif.notification.details.doer.firstName + " " + notif.notification.details.doer.lastName;
                }
                var role = undefined;
                if (notif.notification.details.role !== undefined) {
                    role = notif.notification.details.role.name;
                }
                var actionKey = notif.notification.action_key;
                var workspace = undefined;
                if (notif.notification.details.workspace !== undefined) {
                    workspace = notif.notification.details.workspace.name;
                }
                var resource = undefined;
                if (notif.notification.details.resource !== undefined) {
                    resource = notif.notification.details.resource.name;
                }
                var status = notif.status;
                var text = "";
                switch (actionKey) {
                    case "badge-award":
                        text = "Badges";
                        break;
                    case "registration-decline":
                        text = doer + " vous a refusé l'inscription à l'espace d'activité " + workspace;
                        break;
                    case "resource-create":
                        text = doer + " a créé la ressource " + resource + " dans l'espace d'activité " + workspace;
                        break;
                    case "role-change_right":
                        text = "Accès ressource";
                        break;
                    case "role-subscribe":
                        text = "Nouvelle inscription";
                        break;
                    case "role-subscribe_group":
                    case "role-subscribe_user":
                        text = doer + " vous a attribué le rôle " + role;
                        break;
                    case "workspace-registration-decline":
                        text = doer + " a refusé votre demande d'inscription dans l'espace d'activités " + workspace;
                        break;
                    case "workspace-role-change_right":
                        text = doer + " vous donne accès à la ressource " + resource + " dans l'espace d'activités " + workspace;
                        break;
                    case "workspace-role-subscribe_user":
                    case "workspace-role-subscribe_group":
                        text = doer + " vous a attribué le rôle " + role + " dans l'espace d'activités " + workspace;
                        break;
                    case "resource_creation_notification_message":
                        text = doer + " a créé la ressource " + resource + " dans l'espace d'activités " + workspace;
                        break;
                    case "role-subscribe-queue":
                        text = doer + " a fait une demande d'inscription dans l'espace d'activtés " + workspace;
                        break;
                    case "text_update_notification_message":
                        text = doer + " a modifié le texte " + resource + " de l'espace d'activités " + workspace;
                        break;
                    case "resource-text":
                        text = "Textes";
                        break;
                    default:
                        break;
                }
                result.push(new notification_1.Notification(id, status, text));
            });
            return result;
        });
    };
    NotificationsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsNkJBQTJCLGdCQUFnQixDQUFDLENBQUE7QUFFNUMscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLCtCQUE0QixtQkFBbUIsQ0FBQyxDQUFBO0FBRWhELFlBQVksQ0FBQztBQUdiO0lBRUksOEJBQW9CLEtBQVcsRUFDbkIsY0FBNEI7UUFEcEIsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBYztJQUFJLENBQUM7SUFFN0MsK0NBQStDO0lBQy9DLG1DQUFJLEdBQUosVUFBSyxJQUFrQjtRQUFsQixvQkFBa0IsR0FBbEIsV0FBa0I7UUFDbkIsSUFBSSxhQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBRyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2IsYUFBYSxJQUFJLE9BQU8sQ0FBQztRQUM3QixDQUFDO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksR0FBRyxHQUFHLElBQUksR0FBRyx5QkFBeUIsR0FBQyxhQUFhLEdBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDO1FBQ3hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDekIsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNM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