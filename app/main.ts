
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {HTTP_PROVIDERS} from "@angular/http";
import {NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {AppComponent} from "./app.component";
import {ConfigService} from "./shared/config.service";
import {UserService} from "./shared/user/user.service";
import "./livesync-patch";
import {appInjector} from "./app-injector";


nativeScriptBootstrap(AppComponent, [UserService,ConfigService,HTTP_PROVIDERS, NS_ROUTER_PROVIDERS])
.then((appRef) => appInjector(appRef.injector));
