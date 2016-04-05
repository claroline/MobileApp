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
            var notifs = [];
            //let cpt = 0;
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
                // if (!status) {
                //     cpt += 1;
                // }
                var text = "";
                switch (actionKey) {
                    case "badge-award":
                        text = "Badges";
                        break;
                    case "registration-decline":
                        text = "Refus d'inscription";
                        break;
                    case "resource-create":
                        text = "Création de ressource";
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
                notifs.unshift(new notification_1.Notification(status, text));
            });
            return notifs;
        });
    };
    NotificationsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQXFCLFdBQVcsQ0FBQyxDQUFBO0FBQ2pDLDZCQUEyQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTVDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyxZQUFZLENBQUM7QUFHYjtJQUlJLDhCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUFJLENBQUM7SUFJcEMsK0NBQStDO0lBQy9DLG1DQUFJLEdBQUo7UUFDSSxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLHdEQUF3RCxHQUFHLGVBQU0sQ0FBQyxZQUFZLENBQUM7UUFDekcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNyQixHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ0osTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0wsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLGNBQWM7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFFZixJQUFJLElBQUksR0FBRyxTQUFTLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDdEcsQ0FBQztnQkFFRCxJQUFJLElBQUksR0FBRyxTQUFTLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFFOUMsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUMxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDckQsU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFELENBQUM7Z0JBRUQsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hELENBQUM7Z0JBRUQsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsaUJBQWlCO2dCQUNqQixnQkFBZ0I7Z0JBQ2hCLElBQUk7Z0JBSUosSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLEtBQUssYUFBYTt3QkFBRSxJQUFJLEdBQUcsUUFBUSxDQUFDO3dCQUNoQyxLQUFLLENBQUM7b0JBQ1YsS0FBSyxzQkFBc0I7d0JBQUUsSUFBSSxHQUFHLHFCQUFxQixDQUFDO3dCQUN0RCxLQUFLLENBQUM7b0JBQ1YsS0FBSyxpQkFBaUI7d0JBQUUsSUFBSSxHQUFHLHVCQUF1QixDQUFDO3dCQUNuRCxLQUFLLENBQUM7b0JBQ1YsS0FBSyxtQkFBbUI7d0JBQUUsSUFBSSxHQUFHLGlCQUFpQixDQUFDO3dCQUMvQyxLQUFLLENBQUM7b0JBQ1YsS0FBSyxnQkFBZ0I7d0JBQUUsSUFBSSxHQUFHLHNCQUFzQixDQUFDO3dCQUNqRCxLQUFLLENBQUM7b0JBQ1YsS0FBSyxzQkFBc0IsQ0FBQztvQkFDNUIsS0FBSyxxQkFBcUI7d0JBQUUsSUFBSSxHQUFHLElBQUksR0FBRywyQkFBMkIsR0FBRyxJQUFJLENBQUM7d0JBQ3pFLEtBQUssQ0FBQztvQkFDVixLQUFLLGdDQUFnQzt3QkFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLGtFQUFrRSxHQUFHLFNBQVMsQ0FBQzt3QkFDaEksS0FBSyxDQUFDO29CQUNWLEtBQUssNkJBQTZCO3dCQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsbUNBQW1DLEdBQUcsUUFBUSxHQUFHLDZCQUE2QixHQUFHLFNBQVMsQ0FBQzt3QkFDekksS0FBSyxDQUFDO29CQUNWLEtBQUssK0JBQStCLENBQUM7b0JBQ3JDLEtBQUssZ0NBQWdDO3dCQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsMkJBQTJCLEdBQUcsSUFBSSxHQUFHLDZCQUE2QixHQUFHLFNBQVMsQ0FBQzt3QkFDaEksS0FBSyxDQUFDO29CQUNWLEtBQUssd0NBQXdDO3dCQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsdUJBQXVCLEdBQUcsUUFBUSxHQUFHLDZCQUE2QixHQUFHLFNBQVMsQ0FBQzt3QkFDeEksS0FBSyxDQUFDO29CQUNWLEtBQUssc0JBQXNCO3dCQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsNkRBQTZELEdBQUcsU0FBUyxDQUFDO3dCQUNqSCxLQUFLLENBQUM7b0JBQ1YsS0FBSyxrQ0FBa0M7d0JBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxzQkFBc0IsR0FBRyxRQUFRLEdBQUcsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO3dCQUMvSCxLQUFLLENBQUM7b0JBQ1YsS0FBSyxlQUFlO3dCQUFFLElBQUksR0FBRyxRQUFRLENBQUM7d0JBQ2xDLEtBQUssQ0FBQztvQkFDVjt3QkFDSSxLQUFLLENBQUM7Z0JBR2QsQ0FBQztnQkFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksMkJBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBNUZMO1FBQUMsaUJBQVUsRUFBRTs7NEJBQUE7SUFpR2IsMkJBQUM7QUFBRCxDQUFDLEFBaEdELElBZ0dDO0FBaEdZLDRCQUFvQix1QkFnR2hDLENBQUEifQ==