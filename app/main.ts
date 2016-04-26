
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {HTTP_PROVIDERS} from "angular2/http";
import {NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {AppComponent} from "./app.component";
import {ConfigService} from "./shared/config.service";
import "./livesync-patch";

nativeScriptBootstrap(AppComponent, [ConfigService,HTTP_PROVIDERS, NS_ROUTER_PROVIDERS]);