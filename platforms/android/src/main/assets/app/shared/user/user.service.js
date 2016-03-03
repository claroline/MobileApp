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
        //headers.append("Content-Type","application/x-www-form-urlencoded");
        headers.append("Content-Type", "application/json");
        var client_id = "1_4li11e6wsm0woo8ws0s0c8s0oc00gwwoggwgc0wo88o0gkos08";
        var client_secret = "55zefc59r6o08cgk4okk80www4kkwwwk04gcw0s4wggkow0gc4";
        var grant_type = "password";
        var url = config_1.Config.apiUrl + "oauth/v2/token";
        //let body = "client_id="+client_id+"&client_secret="+client_secret+"&grant_type="+grant_type+"&username="+user.username+"&password="+user.password;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLHVCQUFxQixXQUFXLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFFL0IsWUFBWSxDQUFDO0FBSWI7SUFDRSxxQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07SUFBRyxDQUFDO0lBRW5DLDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBRWQsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixxRUFBcUU7UUFDckUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUVsRCxJQUFJLFNBQVMsR0FBRyxzREFBc0QsQ0FBQztRQUN2RSxJQUFJLGFBQWEsR0FBRyxvREFBb0QsQ0FBQztRQUN6RSxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBQyxnQkFBZ0IsQ0FBQztRQUN6QyxvSkFBb0o7UUFDcEosSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4QixTQUFTLEVBQUcsU0FBUztZQUNyQixhQUFhLEVBQUcsYUFBYTtZQUM3QixVQUFVLEVBQUcsVUFBVTtZQUN2QixRQUFRLEVBQUcsSUFBSSxDQUFDLFFBQVE7WUFDeEIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO1NBQ3pCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsR0FBRyxFQUNILElBQUksRUFDSixFQUFDLE9BQU8sRUFBRyxPQUFPLEVBQUMsQ0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEI7UUFDRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQS9CSDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBa0NiLGtCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSxtQkFBVyxjQWlDdkIsQ0FBQSJ9