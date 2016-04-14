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
    NotificationsService.prototype.load = function () {
        var url = config_1.Config.apiUrl + "icap_notification/api/notifications.json?access_token=" + config_1.Config.access_token;
        return this._http.get(url)
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            var result = [];
            data.forEach(function (notif) {
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
                        text = "Refus d'inscription";
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
                result.push(new notification_1.Notification(status, text));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQXFCLFdBQVcsQ0FBQyxDQUFBO0FBQ2pDLDZCQUEyQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTVDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyxZQUFZLENBQUM7QUFHYjtJQUVJLDhCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUFJLENBQUM7SUFFcEMsK0NBQStDO0lBQy9DLG1DQUFJLEdBQUo7UUFFSSxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLHdEQUF3RCxHQUFHLGVBQU0sQ0FBQyxZQUFZLENBQUM7UUFDekcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUN6QixHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ0osTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0wsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUVmLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztnQkFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN0RyxD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