"use strict";
//Import globals before the zone, so the latter can patch the global functions
require('globals');
//prevent a crash in zone patches
global.HTMLElement = function () { };
global.document = {};
require("zone.js/dist/zone.js");
global.HTMLElement = undefined;
global.document = undefined;
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
var ns_directives_1 = require('./directives/ns-directives');
var page_1 = require('ui/page');
var frame_1 = require('ui/frame');
var text_view_1 = require('ui/text-view');
var application = require('application');
var _platform = null;
function bootstrap(appComponentType, customProviders) {
    if (customProviders === void 0) { customProviders = null; }
    dom_adapter_2.NativeScriptDomAdapter.makeCurrent();
    var nativeScriptProviders = [
        renderer_1.NativeScriptRootRenderer,
        di_1.provide(api_1.RootRenderer, { useClass: renderer_1.NativeScriptRootRenderer }),
        renderer_1.NativeScriptRenderer,
        di_1.provide(api_1.Renderer, { useClass: renderer_1.NativeScriptRenderer }),
        di_1.provide(xhr_1.XHR, { useClass: xhr_2.FileSystemXHR }),
        di_1.provide(exception_handler_1.ExceptionHandler, { useFactory: function () { return new exception_handler_1.ExceptionHandler(dom_adapter_1.DOM, true); }, deps: [] }),
        di_1.provide(core_1.PLATFORM_PIPES, { useValue: common_1.COMMON_PIPES, multi: true }),
        di_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: common_1.COMMON_DIRECTIVES, multi: true }),
        di_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: ns_directives_1.NS_DIRECTIVES, multi: true }),
        application_common_providers_1.APPLICATION_COMMON_PROVIDERS,
        compiler_1.COMPILER_PROVIDERS,
        platform_common_providers_1.PLATFORM_COMMON_PROVIDERS,
        common_1.FORM_PROVIDERS,
    ];
    var appProviders = [];
    if (lang_1.isPresent(customProviders)) {
        appProviders.push(customProviders);
    }
    var pageProvider = di_1.provide(page_1.Page, { useFactory: getDefaultPage });
    appProviders.push(pageProvider);
    if (!_platform) {
        _platform = core_1.platform(nativeScriptProviders);
    }
    return _platform.application(appProviders).bootstrap(appComponentType);
}
exports.bootstrap = bootstrap;
function getDefaultPage() {
    var frame = frame_1.topmost();
    if (frame) {
        return frame.currentPage;
    }
    else {
        return null;
    }
}
function nativeScriptBootstrap(appComponentType, customProviders, appOptions) {
    if (appOptions && appOptions.cssFile) {
        application.cssFile = appOptions.cssFile;
    }
    application.start({
        create: function () {
            var page = new page_1.Page();
            var onLoadedHandler = function (args) {
                page.off('loaded', onLoadedHandler);
                //profiling.stop('application-start');
                console.log('Page loaded');
                //profiling.start('ng-bootstrap');
                console.log('BOOTSTRAPPING...');
                bootstrap(appComponentType, customProviders).then(function (appRef) {
                    //profiling.stop('ng-bootstrap');
                    console.log('ANGULAR BOOTSTRAP DONE.');
                }, function (err) {
                    console.log('ERROR BOOTSTRAPPING ANGULAR');
                    var errorMessage = err.message + "\n\n" + err.stack;
                    console.log(errorMessage);
                    var view = new text_view_1.TextView();
                    view.text = errorMessage;
                    page.content = view;
                });
            };
            page.on('loaded', onLoadedHandler);
            return page;
        }
    });
}
exports.nativeScriptBootstrap = nativeScriptBootstrap;
//# sourceMappingURL=application.js.map