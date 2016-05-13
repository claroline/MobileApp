"use strict";
var application_1 = require("nativescript-angular/application");
var http_1 = require("@angular/http");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var config_service_1 = require("./shared/config.service");
var user_service_1 = require("./shared/user/user.service");
require("./livesync-patch");
var app_injector_1 = require("./app-injector");
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [user_service_1.UserService, config_service_1.ConfigService, http_1.HTTP_PROVIDERS, router_1.NS_ROUTER_PROVIDERS])
    .then(function (appRef) { return app_injector_1.appInjector(appRef.injector); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRCQUFvQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3ZFLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyx1QkFBa0MsNkJBQTZCLENBQUMsQ0FBQTtBQUNoRSw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QywrQkFBNEIseUJBQXlCLENBQUMsQ0FBQTtBQUN0RCw2QkFBMEIsNEJBQTRCLENBQUMsQ0FBQTtBQUN2RCxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFHM0MsbUNBQXFCLENBQUMsNEJBQVksRUFBRSxDQUFDLDBCQUFXLEVBQUMsOEJBQWEsRUFBQyxxQkFBYyxFQUFFLDRCQUFtQixDQUFDLENBQUM7S0FDbkcsSUFBSSxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsMEJBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQyJ9