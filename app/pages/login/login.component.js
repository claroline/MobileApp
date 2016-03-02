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
var router_1 = require("angular2/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginPage = (function () {
    function LoginPage(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.user = new user_1.User();
        // Hardcode a few values to make testing easy
        //this.user.username = "dat";
        //this.user.password = "dat";
    }
    LoginPage.prototype.signIn = function () {
        var _this = this;
        this._userService.login(this.user)
            .subscribe(function () { return _this._router.navigate(["Home"]); }, function (error) { return alert("Mauvais nom d'utilisateur et/ou mot de passe !"); });
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "pages/login/login.html",
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFPM0Q7SUFHRSxtQkFDVSxPQUFlLEVBQ2YsWUFBeUI7UUFEekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRWpDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUV2Qiw2Q0FBNkM7UUFDN0MsNkJBQTZCO1FBQzdCLDZCQUE2QjtJQUMvQixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUFBLGlCQVFDO1FBTkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQ1IsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsRUFDckMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsZ0RBQWdELENBQUMsRUFBdkQsQ0FBdUQsQ0FDbkUsQ0FBQztJQUVOLENBQUM7SUEzQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQ3pCLENBQUM7O2lCQUFBO0lBeUJGLGdCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxpQkFBUyxZQXdCckIsQ0FBQSJ9