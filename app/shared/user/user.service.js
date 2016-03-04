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
var CLIENT_ID = "1_49psizc7y8kko4w8w4w0w8c8w8cwscwc8owg8wgk4w8ww0owg8";
var CLIENT_SECRET = "2swn3xys6vwgkg0w0kkg8sowc84kscswg8w84ckko8c8oswgow";
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var body = JSON.stringify({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: "password",
            username: user.username,
            password: user.password
        });
        return this._http.post(config_1.Config.apiUrl + "oauth/v2/token", body, { headers: headers });
    };
    UserService.prototype.refreshToken = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var body = JSON.stringify({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: "refresh_token",
            refresh_token: config_1.Config.refresh_token
        });
        return this._http.post(config_1.Config.apiUrl + "oauth/v2/token", body, { headers: headers });
    };
    UserService.prototype.getNotifications = function () {
        alert("COUCOU");
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLHVCQUFxQixXQUFXLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFFL0IsWUFBWSxDQUFDO0FBQ2IsSUFBTSxTQUFTLEdBQUcsc0RBQXNELENBQUM7QUFDekUsSUFBTSxhQUFhLEdBQUcsb0RBQW9ELENBQUM7QUFJM0U7SUFHRSxxQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07SUFBRyxDQUFDO0lBRW5DLDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBRWQsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDeEIsU0FBUyxFQUFHLFNBQVM7WUFDckIsYUFBYSxFQUFHLGFBQWE7WUFDN0IsVUFBVSxFQUFHLFVBQVU7WUFDdkIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO1lBQ3hCLFFBQVEsRUFBRyxJQUFJLENBQUMsUUFBUTtTQUN6QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQ2hDLElBQUksRUFDSixFQUFDLE9BQU8sRUFBRyxPQUFPLEVBQUMsQ0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDeEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsYUFBYSxFQUFFLGFBQWE7WUFDNUIsVUFBVSxFQUFFLGVBQWU7WUFDM0IsYUFBYSxFQUFFLGVBQU0sQ0FBQyxhQUFhO1NBQ3BDLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckIsZUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFDaEMsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNyQixDQUFDO0lBQ0osQ0FBQztJQUVELHNDQUFnQixHQUFoQjtRQUNFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBMUNIO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUE2Q2Isa0JBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLG1CQUFXLGNBNEN2QixDQUFBIn0=