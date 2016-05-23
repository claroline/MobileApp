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
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var config_service_1 = require("../../shared/config.service");
var user_service_1 = require("../../shared/user/user.service");
var app_injector_1 = require("../../app-injector");
var ListPage = (function () {
    function ListPage(_router, _configService) {
        this._router = _router;
        this._configService = _configService;
    }
    ListPage.prototype.goToLogin = function () {
        var _this = this;
        if (this.host === undefined) {
            alert("Vous avez oublié d'entrer l'url !");
        }
        else {
            this._configService.setHost(this.host);
            this._configService.getClientIdAndSecretFromHost()
                .subscribe(function (data) {
                _this._configService.setClientId(data.client_id);
                _this._configService.setClientSecret(data.client_secret);
                _this._router.navigate(['Login']);
            }, function (err) {
                alert("Entrez une url valide.");
            });
        }
    };
    ListPage = __decorate([
        router_deprecated_1.CanActivate(function (next, prev) {
            var injector = app_injector_1.appInjector();
            var router = injector.get(router_deprecated_1.Router);
            var config = injector.get(config_service_1.ConfigService);
            var userService = injector.get(user_service_1.UserService);
            userService.isTokenExpired();
            if (config.hasKey("host") && config.isExpired()) {
                router.navigate(['Login']);
                return false;
            }
            else if (config.hasKey("host") && !config.isExpired()) {
                router.navigate(['Home']);
                return false;
            }
            else {
                return true;
            }
        }),
        core_1.Component({
            selector: 'list',
            templateUrl: 'pages/platformsList/list.html',
            providers: [config_service_1.ConfigService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, config_service_1.ConfigService])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsa0NBQWtDLDRCQUE0QixDQUFDLENBQUE7QUFDL0QsK0JBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFDM0QsNkJBQTBCLG9CQUFvQixDQUFDLENBQUE7QUErQi9DO0lBS0Msa0JBQW9CLE9BQWMsRUFBVSxjQUE2QjtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7SUFDekUsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFBQSxpQkFjQztRQWJBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsRUFBRTtpQkFDakQsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDZCxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDeEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBRSxVQUFBLEdBQUc7Z0JBQ0wsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0YsQ0FBQztJQW5ERjtRQUFDLCtCQUFXLENBQUMsVUFBQyxJQUFJLEVBQUUsSUFBSTtZQUN0QixJQUFJLFFBQVEsR0FBRywwQkFBVyxFQUFFLENBQUM7WUFDN0IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBTSxDQUFDLENBQUM7WUFDbkMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyw4QkFBYSxDQUFDLENBQUM7WUFDeEMsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBVyxDQUFDLENBQUM7WUFFNUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBSTdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUN4RCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztRQUdILENBQUMsQ0FBQztRQUNELGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUMsTUFBTTtZQUNmLFdBQVcsRUFBQywrQkFBK0I7WUFDM0MsU0FBUyxFQUFDLENBQUMsOEJBQWEsQ0FBQztTQUN6QixDQUFDOztnQkFBQTtJQTBCRixlQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxnQkFBUSxXQXVCcEIsQ0FBQSJ9