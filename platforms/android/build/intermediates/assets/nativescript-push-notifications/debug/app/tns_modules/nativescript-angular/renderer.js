"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var di_1 = require('angular2/src/core/di');
var api_1 = require('angular2/src/core/render/api');
var lang_1 = require('angular2/src/facade/lang');
var dom_renderer_1 = require('angular2/src/platform/dom/dom_renderer');
var frame_1 = require('ui/frame');
var util = require("./view-util");
var view_util_1 = require("./view-util");
exports.rendererTraceCategory = view_util_1.rendererTraceCategory;
var NativeScriptRootRenderer = (function (_super) {
    __extends(NativeScriptRootRenderer, _super);
    function NativeScriptRootRenderer() {
        _super.apply(this, arguments);
        this._registeredComponents = new Map();
    }
    Object.defineProperty(NativeScriptRootRenderer.prototype, "page", {
        get: function () {
            if (!this._page) {
                this._page = frame_1.topmost().currentPage;
            }
            return this._page;
        },
        enumerable: true,
        configurable: true
    });
    NativeScriptRootRenderer.prototype.renderComponent = function (componentProto) {
        var renderer = this._registeredComponents.get(componentProto.id);
        if (lang_1.isBlank(renderer)) {
            renderer = new NativeScriptRenderer(this, componentProto);
            this._registeredComponents.set(componentProto.id, renderer);
        }
        return renderer;
    };
    NativeScriptRootRenderer = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NativeScriptRootRenderer);
    return NativeScriptRootRenderer;
}(api_1.RootRenderer));
exports.NativeScriptRootRenderer = NativeScriptRootRenderer;
var NativeScriptRenderer = (function (_super) {
    __extends(NativeScriptRenderer, _super);
    function NativeScriptRenderer(_rootRenderer, componentProto) {
        _super.call(this);
        this._rootRenderer = _rootRenderer;
        this.componentProto = componentProto;
        this.rootRenderer = _rootRenderer;
        var page = this.rootRenderer.page;
        var stylesLength = componentProto.styles.length;
        this.componentProtoId = componentProto.id;
        for (var i = 0; i < stylesLength; i++) {
            this.hasComponentStyles = true;
            var cssString = componentProto.styles[i] + "";
            page.addCss(cssString.replace(dom_renderer_1.COMPONENT_VARIABLE, componentProto.id));
        }
        util.traceLog('NativeScriptRenderer created');
    }
    NativeScriptRenderer.prototype.renderComponent = function (componentProto) {
        return this._rootRenderer.renderComponent(componentProto);
    };
    NativeScriptRenderer.prototype.selectRootElement = function (selector) {
        util.traceLog('ROOT');
        var page = this.rootRenderer.page;
        page.nodeName = 'Page';
        return page;
    };
    NativeScriptRenderer.prototype.createViewRoot = function (hostElement) {
        util.traceLog('CREATE VIEW ROOT: ' + hostElement.nodeName);
        return hostElement;
    };
    NativeScriptRenderer.prototype.projectNodes = function (parentElement, nodes) {
        util.traceLog('NativeScriptRenderer.projectNodes');
        nodes.forEach(function (node) {
            util.insertChild(parentElement, node);
        });
    };
    NativeScriptRenderer.prototype.attachViewAfter = function (anchorNode, viewRootNodes) {
        var _this = this;
        util.traceLog('NativeScriptRenderer.attachViewAfter: ' + anchorNode.nodeName + ' ' + anchorNode);
        var parent = (anchorNode.parent || anchorNode.templateParent);
        var insertPosition = util.getChildIndex(parent, anchorNode);
        viewRootNodes.forEach(function (node, index) {
            var childIndex = insertPosition + index + 1;
            util.insertChild(parent, node, childIndex);
            _this.animateNodeEnter(node);
        });
    };
    NativeScriptRenderer.prototype.detachView = function (viewRootNodes) {
        util.traceLog('NativeScriptRenderer.detachView');
        for (var i = 0; i < viewRootNodes.length; i++) {
            var node = viewRootNodes[i];
            util.removeChild(node.parent, node);
            this.animateNodeLeave(node);
        }
    };
    NativeScriptRenderer.prototype.animateNodeEnter = function (node) {
    };
    NativeScriptRenderer.prototype.animateNodeLeave = function (node) {
    };
    NativeScriptRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
        util.traceLog("NativeScriptRenderer.destroyView");
        // Seems to be called on component dispose only (router outlet)
        //TODO: handle this when we resolve routing and navigation.
    };
    NativeScriptRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
        util.traceLog("NativeScriptRenderer.setElementProperty " + renderElement + ': ' + propertyName + " = " + propertyValue);
        util.setProperty(renderElement, propertyName, propertyValue);
    };
    NativeScriptRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
        util.traceLog("NativeScriptRenderer.setElementAttribute " + renderElement + ': ' + attributeName + " = " + attributeValue);
        return this.setElementProperty(renderElement, attributeName, attributeValue);
    };
    NativeScriptRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
        util.traceLog("NativeScriptRenderer.setElementClass " + className + " - " + isAdd);
        if (isAdd) {
            util.addClass(renderElement, className);
        }
        else {
            util.removeClass(renderElement, className);
        }
    };
    NativeScriptRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
        util.setStyleProperty(renderElement, styleName, styleValue);
    };
    /**
    * Used only in debug mode to serialize property changes to comment nodes,
    * such as <template> placeholders.
    */
    NativeScriptRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
        util.traceLog('NativeScriptRenderer.setBindingDebugInfo: ' + renderElement + ', ' + propertyName + ' = ' + propertyValue);
    };
    NativeScriptRenderer.prototype.setElementDebugInfo = function (renderElement, info) {
        util.traceLog('NativeScriptRenderer.setElementDebugInfo: ' + renderElement);
    };
    /**
    * Calls a method on an element.
    */
    NativeScriptRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
        util.traceLog("NativeScriptRenderer.invokeElementMethod " + methodName + " " + args);
    };
    NativeScriptRenderer.prototype.setText = function (renderNode, text) {
        util.traceLog("NativeScriptRenderer.setText");
    };
    NativeScriptRenderer.prototype.createTemplateAnchor = function (parentElement) {
        util.traceLog('NativeScriptRenderer.createTemplateAnchor');
        return util.createTemplateAnchor(parentElement);
    };
    NativeScriptRenderer.prototype.createElement = function (parentElement, name) {
        util.traceLog('NativeScriptRenderer.createElement: ' + name + ' parent: ' + parentElement + ', ' + (parentElement ? parentElement.nodeName : 'null'));
        var result = util.createView(name, parentElement);
        // adding an attribute (property) to {N} view for applying component specific css. 
        // The property value is generated by angular2 infrastructure on conponent creation. 
        if (this.hasComponentStyles) {
            result[dom_renderer_1.CONTENT_ATTR.replace(dom_renderer_1.COMPONENT_VARIABLE, this.componentProtoId)] = true;
        }
        return result;
    };
    NativeScriptRenderer.prototype.createText = function (value) {
        util.traceLog('NativeScriptRenderer.createText');
        return util.createText(value);
        ;
    };
    NativeScriptRenderer.prototype.listen = function (renderElement, eventName, callback) {
        util.traceLog('NativeScriptRenderer.listen: ' + eventName);
        var zonedCallback = global.zone.bind(callback);
        renderElement.on(eventName, zonedCallback);
        return function () { return renderElement.off(eventName, zonedCallback); };
    };
    NativeScriptRenderer.prototype.listenGlobal = function (target, eventName, callback) {
        throw new Error('Not implemented.');
    };
    NativeScriptRenderer = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [NativeScriptRootRenderer, api_1.RenderComponentType])
    ], NativeScriptRenderer);
    return NativeScriptRenderer;
}(api_1.Renderer));
exports.NativeScriptRenderer = NativeScriptRenderer;
//# sourceMappingURL=renderer.js.map