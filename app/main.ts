
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {HTTP_PROVIDERS} from "@angular/http";
import {NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {AppComponent} from "./app.component";
import {ConfigService} from "./shared/config.service";
import "./livesync-patch";
import {appInjector} from "./app-injector";


nativeScriptBootstrap(AppComponent, [ConfigService,HTTP_PROVIDERS, NS_ROUTER_PROVIDERS])
.then((appRef) => appInjector(appRef.injector));
