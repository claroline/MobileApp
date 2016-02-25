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
var dialogsModule = require("ui/dialogs");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var RegisterPage = (function () {
    function RegisterPage(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.user = new user_1.User();
    }
    RegisterPage.prototype.register = function () {
        if (this.user.isValidEmail()) {
            this.completeRegistration();
        }
        else {
            dialogsModule.alert({
                message: "Enter a valid email address.",
                okButtonText: "OK"
            });
        }
    };
    RegisterPage.prototype.completeRegistration = function () {
        var _this = this;
        this._userService.register(this.user)
            .subscribe(function () {
            dialogsModule
                .alert("Your account was successfully created.")
                .then(function () { return _this._router.navigate(["Login"]); });
        }, function (error) {
            dialogsModule.alert({
                message: "Unfortunately we were unable to create your account.",
                okButtonText: "OK"
            });
        });
    };
    RegisterPage = __decorate([
        core_1.Component({
            selector: "register",
            templateUrl: "pages/register/register.html",
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], RegisterPage);
    return RegisterPage;
}());
exports.RegisterPage = RegisterPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsSUFBWSxhQUFhLFdBQU0sWUFBWSxDQUFDLENBQUE7QUFFNUMscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFPM0Q7SUFHRSxzQkFDVSxPQUFlLEVBQ2YsWUFBeUI7UUFEekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRWpDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLE9BQU8sRUFBRSw4QkFBOEI7Z0JBQ3ZDLFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCO1FBQUEsaUJBZUc7UUFkRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xDLFNBQVMsQ0FDUjtZQUNFLGFBQWE7aUJBQ1YsS0FBSyxDQUFDLHdDQUF3QyxDQUFDO2lCQUMvQyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1FBQ2xELENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDSixhQUFhLENBQUMsS0FBSyxDQUFDO2dCQUNsQixPQUFPLEVBQUUsc0RBQXNEO2dCQUMvRCxZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUF6Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQ3pCLENBQUM7O29CQUFBO0lBc0NGLG1CQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQXJDWSxvQkFBWSxlQXFDeEIsQ0FBQSJ9