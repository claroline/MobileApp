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
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var client_id = "1_49psizc7y8kko4w8w4w0w8c8w8cwscwc8owg8wgk4w8ww0owg8";
        var client_secret = "2swn3xys6vwgkg0w0kkg8sowc84kscswg8w84ckko8c8oswgow";
        var grant_type = "password";
        var url = config_1.Config.apiUrl + "oauth/v2/token";
        var body = JSON.stringify({
            client_id: client_id,
            client_secret: client_secret,
            grant_type: grant_type,
            username: user.username,
            password: user.password
        });
        return this._http.post(url, body, { headers: headers });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLHVCQUFxQixXQUFXLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFFL0IsWUFBWSxDQUFDO0FBSWI7SUFDRSxxQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07SUFBRyxDQUFDO0lBRW5DLDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBRWQsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRWxELElBQUksU0FBUyxHQUFHLHNEQUFzRCxDQUFDO1FBQ3ZFLElBQUksYUFBYSxHQUFHLG9EQUFvRCxDQUFDO1FBQ3pFLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFDLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDeEIsU0FBUyxFQUFHLFNBQVM7WUFDckIsYUFBYSxFQUFHLGFBQWE7WUFDN0IsVUFBVSxFQUFHLFVBQVU7WUFDdkIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO1lBQ3hCLFFBQVEsRUFBRyxJQUFJLENBQUMsUUFBUTtTQUN6QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLEdBQUcsRUFDSCxJQUFJLEVBQ0osRUFBQyxPQUFPLEVBQUcsT0FBTyxFQUFDLENBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQsc0NBQWdCLEdBQWhCO1FBQ0UsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUE3Qkg7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWdDYixrQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksbUJBQVcsY0ErQnZCLENBQUEifQ==