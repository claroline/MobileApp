"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("angular2/core");
var sidedrawer_1 = require("./../sidedrawer");
var page_1 = require("ui/page");
var elementRegistry = require('nativescript-angular/element-registry');
var di_1 = require('angular2/src/core/di');
var RadSideDrawerComponent = (function () {
    function RadSideDrawerComponent(elementRef, page, viewContainer) {
        this.elementRef = elementRef;
        this.page = page;
        this.viewContainer = viewContainer;
        this.drawerOpening = new core_1.EventEmitter();
        this.drawerOpen = new core_1.EventEmitter();
        this.drawerClosing = new core_1.EventEmitter();
        this.drawerClosed = new core_1.EventEmitter();
        console.log("elementRef: " + this.elementRef);
        console.log("elementRef.nativeElement: " + this.elementRef.nativeElement);
        this.sideDrawer = this.elementRef.nativeElement;
    }
    Object.defineProperty(RadSideDrawerComponent.prototype, "transition", {
        set: function (transition) {
            this.sideDrawer.drawerTransition = transition;
        },
        enumerable: true,
        configurable: true
    });
    RadSideDrawerComponent.prototype.ngAfterContentInit = function () {
        console.log("mainTemplate: " + this.mainTemplate);
        var mainViewRef = this.viewContainer.createEmbeddedView(this.mainTemplate);
        console.log("mainViewRef: " + mainViewRef);
        //Filter out text nodes, etc
        var mainViews = mainViewRef.rootNodes.filter(function (node) {
            return node.nodeName && node.nodeName !== '#text';
        });
        if (mainViews.length > 0) {
            if (this.sideDrawer.parent) {
                this.sideDrawer.parent._removeView(this.sideDrawer);
            }
            this.page.content = this.sideDrawer;
            var viewRoot = mainViews[0];
            console.log("viewRoot: " + viewRoot);
            if (viewRoot.parent) {
                viewRoot.parent._removeView(viewRoot);
            }
            this.sideDrawer.mainContent = viewRoot;
        }
        console.log("drawerTemplate: " + this.drawerTemplate);
        var drawerViewRef = this.viewContainer.createEmbeddedView(this.drawerTemplate);
        console.log("drawerViewRef: " + drawerViewRef);
        //Filter out text nodes, etc
        var drawerViews = drawerViewRef.rootNodes.filter(function (node) {
            return node.nodeName && node.nodeName !== '#text';
        });
        if (drawerViews.length > 0) {
            this.page.content = this.sideDrawer;
            var viewRoot = drawerViews[0];
            console.log("viewRoot: " + viewRoot);
            if (viewRoot.parent) {
                viewRoot.parent._removeView(viewRoot);
            }
            this.sideDrawer.drawerContent = viewRoot;
        }
    };
    Object.defineProperty(RadSideDrawerComponent.prototype, "drawerContentSize", {
        set: function (value) {
            this._drawerContentSize = value;
            this.updateContentSize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadSideDrawerComponent.prototype, "showOverNavigation", {
        set: function (value) {
            this._showOverNavigation = value;
            this.updateShowOverNavigation();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadSideDrawerComponent.prototype, "gesturesEnabled", {
        set: function (value) {
            this._gesturesEnabled = value;
            this.updateGesturesEnabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadSideDrawerComponent.prototype, "drawerTransition", {
        set: function (value) {
            this._drawerTransition = value;
            this.updateDrawerTransition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadSideDrawerComponent.prototype, "drawerLocation", {
        set: function (value) {
            this._drawerLocation = value;
            this.updateDrawerLocation();
        },
        enumerable: true,
        configurable: true
    });
    RadSideDrawerComponent.prototype.updateDrawerLocation = function () {
        this.sideDrawer.drawerLocation = this._drawerLocation;
    };
    RadSideDrawerComponent.prototype.updateDrawerTransition = function () {
        this.sideDrawer.drawerTransition = this._drawerTransition;
    };
    RadSideDrawerComponent.prototype.updateGesturesEnabled = function () {
        this.sideDrawer.gesturedEnabled = this._gesturesEnabled;
    };
    RadSideDrawerComponent.prototype.updateShowOverNavigation = function () {
        this.sideDrawer.showOverNavigation = this._showOverNavigation;
    };
    RadSideDrawerComponent.prototype.updateContentSize = function () {
        this.sideDrawer.drawerContentSize = this._drawerContentSize;
    };
    __decorate([
        core_1.Output()
    ], RadSideDrawerComponent.prototype, "drawerOpening", void 0);
    __decorate([
        core_1.Output()
    ], RadSideDrawerComponent.prototype, "drawerOpen", void 0);
    __decorate([
        core_1.Output()
    ], RadSideDrawerComponent.prototype, "drawerClosing", void 0);
    __decorate([
        core_1.Output()
    ], RadSideDrawerComponent.prototype, "drawerClosed", void 0);
    __decorate([
        core_1.Input()
    ], RadSideDrawerComponent.prototype, "transition", null);
    RadSideDrawerComponent = __decorate([
        core_1.Component({
            selector: 'RadSideDrawer',
            template: ''
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(page_1.Page)),
        __param(2, core_1.Inject(core_1.ViewContainerRef))
    ], RadSideDrawerComponent);
    return RadSideDrawerComponent;
}());
exports.RadSideDrawerComponent = RadSideDrawerComponent;
var MainTemplateDirective = (function () {
    function MainTemplateDirective(owner, template) {
        console.log('main directive: ' + template);
        owner.mainTemplate = template;
    }
    MainTemplateDirective = __decorate([
        core_1.Directive({
            selector: "[drawerMain]"
        }),
        __param(0, core_1.Inject(RadSideDrawerComponent)),
        __param(1, core_1.Inject(core_1.TemplateRef))
    ], MainTemplateDirective);
    return MainTemplateDirective;
}());
exports.MainTemplateDirective = MainTemplateDirective;
var DrawerTemplateDirective = (function () {
    function DrawerTemplateDirective(owner, template) {
        console.log('drawer directive: ' + template);
        owner.drawerTemplate = template;
    }
    DrawerTemplateDirective = __decorate([
        core_1.Directive({
            selector: "[drawerSide]"
        }),
        __param(0, core_1.Inject(RadSideDrawerComponent)),
        __param(1, core_1.Inject(core_1.TemplateRef))
    ], DrawerTemplateDirective);
    return DrawerTemplateDirective;
}());
exports.DrawerTemplateDirective = DrawerTemplateDirective;
exports.SIDEDRAWER_DIRECTIVES = [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective];
exports.SIDEDRAWER_PROVIDERS = [di_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: exports.SIDEDRAWER_DIRECTIVES, multi: true })];
elementRegistry.registerElement("RadSideDrawer", function () { return sidedrawer_1.RadSideDrawer; });
