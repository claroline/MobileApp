"use strict";
require('globals');
require("zone.js/dist/zone-node");
require('reflect-metadata');
require('./polyfills/array');
var lang_1 = require('angular2/src/facade/lang');
var core_1 = require('angular2/core');
var di_1 = require('angular2/src/core/di');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var api_1 = require('angular2/src/core/render/api');
var renderer_1 = require('./renderer');
var dom_adapter_2 = require('./dom_adapter');
var xhr_1 = require('angular2/src/compiler/xhr');
var xhr_2 = require('./xhr');
var exception_handler_1 = require('angular2/src/facade/exception_handler');
var application_common_providers_1 = require('angular2/src/core/application_common_providers');
var compiler_1 = require('angular2/src/compiler/compiler');
var platform_common_providers_1 = require('angular2/src/core/platform_common_providers');
var common_1 = require("angular2/common");
var directives_1 = require('./directives');
var page_1 = require('ui/page');
var text_view_1 = require('ui/text-view');
var application = require('application');
var platform_providers_1 = require("./platform-providers");
var nativescriptIntl = require("nativescript-intl");
global.Intl = nativescriptIntl;
var _platform = null;
function bootstrap(appComponentType, customProviders) {
    if (customProviders === void 0) { customProviders = null; }
    dom_adapter_2.NativeScriptDomAdapter.makeCurrent();
    var platformProviders = [
        platform_common_providers_1.PLATFORM_COMMON_PROVIDERS,
    ];
    var defaultAppProviders = [
        application_common_providers_1.APPLICATION_COMMON_PROVIDERS,
        common_1.FORM_PROVIDERS,
        di_1.provide(core_1.PLATFORM_PIPES, { useValue: common_1.COMMON_PIPES, multi: true }),
        di_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: common_1.COMMON_DIRECTIVES, multi: true }),
        di_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: directives_1.NS_DIRECTIVES, multi: true }),
        di_1.provide(exception_handler_1.ExceptionHandler, { useFactory: function () { return new exception_handler_1.ExceptionHandler(dom_adapter_1.DOM, true); }, deps: [] }),
        platform_providers_1.defaultPageProvider,
        platform_providers_1.defaultDeviceProvider,
        renderer_1.NativeScriptRootRenderer,
        di_1.provide(api_1.RootRenderer, { useClass: renderer_1.NativeScriptRootRenderer }),
        renderer_1.NativeScriptRenderer,
        di_1.provide(api_1.Renderer, { useClass: renderer_1.NativeScriptRenderer }),
        compiler_1.COMPILER_PROVIDERS,
        di_1.provide(xhr_1.XHR, { useClass: xhr_2.FileSystemXHR }),
    ];
    var appProviders = [defaultAppProviders];
    if (lang_1.isPresent(customProviders)) {
        appProviders.push(customProviders);
    }
    if (!_platform) {
        _platform = core_1.platform(platformProviders);
    }
    return _platform.application(appProviders).bootstrap(appComponentType);
}
exports.bootstrap = bootstrap;
function nativeScriptBootstrap(appComponentType, customProviders, appOptions) {
    if (appOptions && appOptions.cssFile) {
        application.cssFile = appOptions.cssFile;
    }
    return new Promise(function (resolve, reject) {
        application.start({
            create: function () {
                var page = new page_1.Page();
                if (appOptions) {
                    page.actionBarHidden = appOptions.startPageActionBarHidden;
                }
                var onLoadedHandler = function (args) {
                    page.off('loaded', onLoadedHandler);
                    //profiling.stop('application-start');
                    console.log('Page loaded');
                    //profiling.start('ng-bootstrap');
                    console.log('BOOTSTRAPPING...');
                    bootstrap(appComponentType, customProviders).then(function (appRef) {
                        //profiling.stop('ng-bootstrap');
                        console.log('ANGULAR BOOTSTRAP DONE.');
                        resolve(appRef);
                    }, function (err) {
                        console.log('ERROR BOOTSTRAPPING ANGULAR');
                        var errorMessage = err.message + "\n\n" + err.stack;
                        console.log(errorMessage);
                        var view = new text_view_1.TextView();
                        view.text = errorMessage;
                        page.content = view;
                        reject(err);
                    });
                };
                page.on('loaded', onLoadedHandler);
                return page;
            }
        });
    });
}
exports.nativeScriptBootstrap = nativeScriptBootstrap;
//# sourceMappingURL=application.js.map