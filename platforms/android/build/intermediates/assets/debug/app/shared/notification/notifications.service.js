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
                var doer = notif.notification.details.doer.firstName + " " + notif.notification.details.doer.lastName;
                var actionKey = notif.notification.action_key;
                var role = notif.notification.details.role.name;
                var workspace = notif.notification.details.workspace.name;
                result.push(new notification_1.Notification(notif.id, doer, actionKey, role, workspace));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQXFCLFdBQVcsQ0FBQyxDQUFBO0FBQ2pDLDZCQUEyQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTVDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyxZQUFZLENBQUM7QUFHYjtJQUNJLDhCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUFJLENBQUM7SUFFcEMsK0NBQStDO0lBQy9DLG1DQUFJLEdBQUo7UUFFSSxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLHdEQUF3RCxHQUFHLGVBQU0sQ0FBQyxZQUFZLENBQUM7UUFDekcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNyQixHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ0osTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0wsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBR2hCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUdmLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3RHLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO2dCQUM5QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNoRCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUMxRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksMkJBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQTdCTDtRQUFDLGlCQUFVLEVBQUU7OzRCQUFBO0lBaUNiLDJCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSw0QkFBb0IsdUJBZ0NoQyxDQUFBIn0=