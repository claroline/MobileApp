"use strict";
var application_1 = require("nativescript-angular/application");
var http_1 = require("@angular/http");
var config_service_1 = require("./shared/config.service");
var user_service_1 = require("./shared/user/user.service");
require("./livesync-patch");
var app_injector_1 = require("./app-injector");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [user_service_1.UserService, config_service_1.ConfigService, http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS])
    .then(function (appRef) { return app_injector_1.appInjector(appRef.injector); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRCQUFvQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3ZFLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUc3QywrQkFBNEIseUJBQXlCLENBQUMsQ0FBQTtBQUN0RCw2QkFBMEIsNEJBQTRCLENBQUMsQ0FBQTtBQUN2RCxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFDMUIsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsMkJBQW1DLGNBQWMsQ0FBQyxDQUFBO0FBQ2xELDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBTzdDLG1DQUFxQixDQUFDLDRCQUFZLEVBQUUsQ0FBQywwQkFBVyxFQUFDLDhCQUFhLEVBQUMscUJBQWMsRUFBRSxpQ0FBb0IsQ0FBQyxDQUFDO0tBQ3BHLElBQUksQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLDBCQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUMifQ==