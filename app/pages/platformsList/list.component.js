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
        /*if (this._configService.getHost() !== undefined){
            this._router.navigate(['Login']);
        }*/
        this._router = _router;
        this._configService = _configService;
    }
    ListPage.prototype.goToLogin = function () {
        //On s'assure que le dernier caractère de l'url est un slash
        if (this.host.slice(-1) !== "/") {
            this.host = this.host + "/";
        }
        this._configService.setHost(this.host);
        this._router.navigate(['Login']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLCtCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBUTFEO0lBS0Msa0JBQW9CLE9BQWMsRUFBVSxjQUE2QjtRQUN4RTs7V0FFRztRQUhnQixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7SUFNekUsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFFQyw0REFBNEQ7UUFDNUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBQyxHQUFHLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTNCRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUMsTUFBTTtZQUNmLFdBQVcsRUFBQywrQkFBK0I7WUFDM0MsU0FBUyxFQUFDLENBQUMsOEJBQWEsQ0FBQztTQUN6QixDQUFDOztnQkFBQTtJQXdCRixlQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxnQkFBUSxXQXNCcEIsQ0FBQSJ9