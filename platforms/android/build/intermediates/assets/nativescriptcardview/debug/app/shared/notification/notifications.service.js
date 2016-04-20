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
var core_1 = require("angular2/core");
var config_1 = require("../config");
var notification_1 = require("./notification");
var http_1 = require("angular2/http");
"use strict";
var NotificationsService = (function () {
    function NotificationsService(_http) {
        this._http = _http;
    }
    //Load all the notifications of a specific user
    NotificationsService.prototype.load = function (type) {
        if (type === void 0) { type = null; }
        var notifications = 'notifications';
        if (type != null) {
            notifications += '/read';
        }
        var url = config_1.Config.apiUrl + "icap_notification/api/" + notifications + ".json?access_token=" + config_1.Config.access_token;
        return this._http.get(url)
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
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
        __metadata('design:paramtypes', [http_1.Http])
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQXFCLFdBQVcsQ0FBQyxDQUFBO0FBQ2pDLDZCQUEyQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTVDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyxZQUFZLENBQUM7QUFHYjtJQUVJLDhCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUFJLENBQUM7SUFFcEMsK0NBQStDO0lBQy9DLG1DQUFJLEdBQUosVUFBSyxJQUFrQjtRQUFsQixvQkFBa0IsR0FBbEIsV0FBa0I7UUFDbkIsSUFBSSxhQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBRyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2IsYUFBYSxJQUFJLE9BQU8sQ0FBQztRQUM3QixDQUFDO1FBRUQsSUFBSSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBRyx3QkFBd0IsR0FBQyxhQUFhLEdBQUMscUJBQXFCLEdBQUcsZUFBTSxDQUFDLFlBQVksQ0FBQztRQUM3RyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ3pCLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDSixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBRWYsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7Z0JBRS9CLElBQUksSUFBSSxHQUFH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