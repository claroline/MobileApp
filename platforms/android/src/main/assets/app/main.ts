
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {HTTP_PROVIDERS} from "@angular/http";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {Component} from "@angular/core";
import {ConfigService} from "./shared/config.service";
import {UserService} from "./shared/user/user.service";
import "./livesync-patch";
import {appInjector} from "./app-injector";
import {APP_ROUTER_PROVIDERS} from "./app.routes";

@Component({
    selector: "main",
    providers: [NS_ROUTER_PROVIDERS],
    directives: [NS_ROUTER_DIRECTIVES],
    template: `
    	<page-router-outlet>

    	</page-router-outlet>

    `
})

export class AppComponent {

}



nativeScriptBootstrap(AppComponent, [UserService,ConfigService,HTTP_PROVIDERS, APP_ROUTER_PROVIDERS])
.then((appRef) => appInjector(appRef.injector));
