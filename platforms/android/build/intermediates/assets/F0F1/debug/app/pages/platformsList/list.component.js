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
var ListPage = (function () {
    function ListPage(_router, _configService) {
        this._router = _router;
        this._configService = _configService;
        if (this._configService.hasKey("host")) {
            this._router.navigate(['Login']);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3BELCtCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBVTFEO0lBS0Msa0JBQW9CLE9BQWMsRUFBVSxjQUE2QjtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDeEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0YsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFBQSxpQkFjQztRQWJBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsRUFBRTtpQkFDakQsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDZCxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDeEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBRSxVQUFBLEdBQUc7Z0JBQ0wsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0YsQ0FBQztJQWhDRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUMsTUFBTTtZQUNmLFdBQVcsRUFBQywrQkFBK0I7WUFDM0MsU0FBUyxFQUFDLENBQUMsOEJBQWEsQ0FBQztTQUN6QixDQUFDOztnQkFBQTtJQTZCRixlQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxnQkFBUSxXQTBCcEIsQ0FBQSJ9