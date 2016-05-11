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
var config_service_1 = require("../../shared/config.service");
var app_injector_1 = require("../../app-injector");
var ListPage = (function () {
    function ListPage(_router, _configService) {
        this._router = _router;
        this._configService = _configService;
        // if (this._configService.hasKey("host")){
        // 	this._router.navigate(['Login']);
        // }
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
                alert("L'url que vous avez entrée n'est pas valide !");
            });
        }
    };
    ListPage = __decorate([
        router_1.CanActivate(function (next, prev) {
            var injector = app_injector_1.appInjector();
            var router = injector.get(router_1.Router);
            var config = injector.get(config_service_1.ConfigService);
            if (config.hasKey("host")) {
                router.navigate(['Login']);
                return false;
            }
            return true;
        }),
        core_1.Component({
            selector: 'list',
            templateUrl: 'pages/platformsList/list.html',
            providers: [config_service_1.ConfigService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, config_service_1.ConfigService])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsK0JBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsNkJBQTBCLG9CQUFvQixDQUFDLENBQUE7QUFxQi9DO0lBS0Msa0JBQW9CLE9BQWMsRUFBVSxjQUE2QjtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDeEUsMkNBQTJDO1FBQzNDLHFDQUFxQztRQUNyQyxJQUFJO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFBQSxpQkFjQztRQWJBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsRUFBRTtpQkFDakQsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDZCxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDeEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBRSxVQUFBLEdBQUc7Z0JBQ0wsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0YsQ0FBQztJQTVDRjtRQUFDLG9CQUFXLENBQUMsVUFBQyxJQUFJLEVBQUUsSUFBSTtZQUN0QixJQUFJLFFBQVEsR0FBRywwQkFBVyxFQUFFLENBQUM7WUFDN0IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLDhCQUFhLENBQUMsQ0FBQztZQUV4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztRQUNELGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUMsTUFBTTtZQUNmLFdBQVcsRUFBQywrQkFBK0I7WUFDM0MsU0FBUyxFQUFDLENBQUMsOEJBQWEsQ0FBQztTQUN6QixDQUFDOztnQkFBQTtJQTZCRixlQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxnQkFBUSxXQTBCcEIsQ0FBQSJ9