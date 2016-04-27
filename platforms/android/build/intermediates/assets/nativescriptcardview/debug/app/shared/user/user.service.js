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
        var headers = this.buildHeader();
        var body = JSON.stringify({
            client_id: config_1.Config.client_id,
            client_secret: config_1.Config.client_secret,
            grant_type: "password",
            username: user.username,
            password: user.password
        });
        var host = this._configService.getHost();
        return this._http.post(host + "/oauth/v2/token", body, { headers: headers });
    };
    UserService.prototype.refreshToken = function () {
        var _this = this;
        var headers = this.buildHeader();
        var refresh = this._configService.getRefreshToken();
        var body = JSON.stringify({
            client_id: config_1.Config.client_id,
            client_secret: config_1.Config.client_secret,
            grant_type: "refresh_token",
            refresh_token: refresh
        });
        var host = this._configService.getHost();
        this._http.post(host + "/oauth/v2/token", body, { headers: headers })
            .subscribe(function (data) {
            //Config.access_token = data.json().access_token;
            //Config.refresh_token = data.json().refresh_token;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLHVCQUFxQixXQUFXLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsK0JBQTRCLG1CQUFtQixDQUFDLENBQUE7QUFFaEQsWUFBWSxDQUFDO0FBSWI7SUFJSSxxQkFBb0IsS0FBVyxFQUNuQixjQUE0QjtRQURwQixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUFjO0lBQUksQ0FBQztJQUU3QyxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBRVosSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsU0FBUyxFQUFFLGVBQU0sQ0FBQyxTQUFTO1lBQzNCLGFBQWEsRUFBRSxlQUFNLENBQUMsYUFBYTtZQUNuQyxVQUFVLEVBQUUsVUFBVTtZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNsQixJQUFJLEdBQUcsaUJBQWlCLEVBQ3hCLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDbkIsQ0FBQztJQUNWLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsU0FBUyxFQUFFLGVBQU0sQ0FBQyxTQUFTO1lBQzNCLGFBQWEsRUFBRSxlQUFNLENBQUMsYUFBYTtZQUNuQyxVQUFVLEVBQUUsZUFBZTtZQUMzQixhQUFhLEVBQUUsT0FBTztTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNYLElBQUksR0FBRyxpQkFBaUIsRUFDeEIsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNuQjthQUNKLFNBQVMsQ0FDTixVQUFDLElBQUk7WUFDRCxpREFBaUQ7WUFDakQsbURBQW1EO1lBQ25ELEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM3RCxLQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUNBLENBQUM7SUFDVixDQUFDO0lBdkRMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUE0RGIsa0JBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDO0FBM0RZLG1CQUFXLGNBMkR2QixDQUFBIn0=