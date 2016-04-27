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
require("rxjs/add/operator/map");
var config_service_1 = require("../config.service");
"use strict";
var UserService = (function () {
    function UserService(_http, _configService) {
        this._http = _http;
        this._configService = _configService;
    }
    UserService.prototype.buildHeader = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    };
    UserService.prototype.login = function (user) {
        var clientId = this._configService.getClientId();
        var clientSecret = this._configService.getClientSecret();
        var headers = this.buildHeader();
        var body = JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: "password",
            username: user.username,
            password: user.password
        });
        var host = this._configService.getHost();
        return this._http.post(host + "/oauth/v2/token", body, { headers: headers });
    };
    UserService.prototype.refreshToken = function () {
        var _this = this;
        var clientId = this._configService.getClientId();
        var clientSecret = this._configService.getClientSecret();
        var headers = this.buildHeader();
        var refresh = this._configService.getRefreshToken();
        var body = JSON.stringify({
            client_id: clientId,
            client_secret: clientId,
            grant_type: "refresh_token",
            refresh_token: refresh
        });
        var host = this._configService.getHost();
        this._http.post(host + "/oauth/v2/token", body, { headers: headers })
            .subscribe(function (data) {
            _this._configService.setAccessToken(data.json().access_token);
            _this._configService.setRefreshToken(data.json().refresh_token);
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiwrQkFBNEIsbUJBQW1CLENBQUMsQ0FBQTtBQUVoRCxZQUFZLENBQUM7QUFJYjtJQUlJLHFCQUFvQixLQUFXLEVBQ25CLGNBQTRCO1FBRHBCLFVBQUssR0FBTCxLQUFLLENBQU07UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQWM7SUFBSSxDQUFDO0lBRTdDLGlDQUFXLEdBQVg7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFDWixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsYUFBYSxFQUFFLFlBQVk7WUFDM0IsVUFBVSxFQUFFLFVBQVU7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUMxQixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDbEIsSUFBSSxHQUFHLGlCQUFpQixFQUN4QixJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQ25CLENBQUM7SUFDVixDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN0QixTQUFTLEVBQUUsUUFBUTtZQUNuQixhQUFhLEVBQUUsUUFBUTtZQUN2QixVQUFVLEVBQUUsZUFBZTtZQUMzQixhQUFhLEVBQUUsT0FBTztTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNYLElBQUksR0FBRyxpQkFBaUIsRUFDeEIsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNuQjthQUNKLFNBQVMsQ0FDTixVQUFDLElBQUk7WUFDRCxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDN0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXZETDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBNERiLGtCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTNEWSxtQkFBVyxjQTJEdkIsQ0FBQSJ9