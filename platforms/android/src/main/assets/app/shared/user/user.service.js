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
var http_1 = require("angular2/http");
var config_1 = require("../config");
require("rxjs/add/operator/map");
"use strict";
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.buildHeader = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    };
    UserService.prototype.login = function (user) {
        var headers = this.buildHeader();
        var body = JSON.stringify({
            client_id: config_1.Config.client_id,
            client_secret: config_1.Config.client_secret,
            grant_type: "password",
            username: user.username,
            password: user.password
        });
        return this._http.post(config_1.Config.apiUrl + "oauth/v2/token", body, { headers: headers });
    };
    UserService.prototype.refreshToken = function () {
        var headers = this.buildHeader();
        var body = JSON.stringify({
            client_id: config_1.Config.client_id,
            client_secret: config_1.Config.client_secret,
            grant_type: "refresh_token",
            refresh_token: config_1.Config.refresh_token
        });
        this._http.post(config_1.Config.apiUrl + "oauth/v2/token", body, { headers: headers })
            .subscribe(function (data) {
            config_1.Config.access_token = data.json().access_token;
            config_1.Config.refresh_token = data.json().refresh_token;
        });
    };
    UserService.prototype.getNotifications = function () {
        return this._http.get(config_1.Config.apiUrl + "icap_notification/api/notifications.json?access_token=" + config_1.Config.access_token)
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLHVCQUFxQixXQUFXLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFFL0IsWUFBWSxDQUFDO0FBSWI7SUFHRSxxQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07SUFBRyxDQUFDO0lBRW5DLGlDQUFXLEdBQVg7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFFZCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4QixTQUFTLEVBQUcsZUFBTSxDQUFDLFNBQVM7WUFDNUIsYUFBYSxFQUFHLGVBQU0sQ0FBQyxhQUFhO1lBQ3BDLFVBQVUsRUFBRyxVQUFVO1lBQ3ZCLFFBQVEsRUFBRyxJQUFJLENBQUMsUUFBUTtZQUN4QixRQUFRLEVBQUcsSUFBSSxDQUFDLFFBQVE7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixlQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUNoQyxJQUFJLEVBQ0osRUFBQyxPQUFPLEVBQUcsT0FBTyxFQUFDLENBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3hCLFNBQVMsRUFBRSxlQUFNLENBQUMsU0FBUztZQUMzQixhQUFhLEVBQUUsZUFBTSxDQUFDLGFBQWE7WUFDbkMsVUFBVSxFQUFFLGVBQWU7WUFDM0IsYUFBYSxFQUFFLGVBQU0sQ0FBQyxhQUFhO1NBQ3BDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNkLGVBQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQ2hDLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDckI7YUFDQSxTQUFTLENBQ1AsVUFBQyxJQUFJO1lBQ0gsZUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQy9DLGVBQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUNuRCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ25CLGVBQU0sQ0FBQyxNQUFNLEdBQUcsd0RBQXdELEdBQUcsZUFBTSxDQUFDLFlBQVksQ0FDL0Y7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQXZESDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBNERiLGtCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTNEWSxtQkFBVyxjQTJEdkIsQ0FBQSJ9