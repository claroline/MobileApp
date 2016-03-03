"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var NG_VIEW = "_ngViewRef";
var console = { log: function (msg) { } };
var ListViewDirective = (function () {
    function ListViewDirective() {
    }
    ListViewDirective.prototype.registerItemTemplate = function (container) {
        this.itemTemplate = container;
    };
    ListViewDirective.prototype.onItemLoading = function (args) {
        if (!this.itemTemplate) {
            return;
        }
        var index = args.index;
        var items = args.object.items;
        var currentItem = typeof (items.getItem) === "function" ? items.getItem(index) : items[index];
        var viewRef;
        if (args.view) {
            console.log("ListView.onItemLoading: " + index + " - Reusing exisiting view");
            viewRef = args.view[NG_VIEW];
        }
        else {
            console.log("ListView.onItemLoading: " + index + " - Creating view from template");
            viewRef = this.itemTemplate.instantiateTemplate();
            args.view = getSingleViewFromViewRef(viewRef);
            args.view[NG_VIEW] = viewRef;
        }
        this.setupViewRef(viewRef, currentItem, index);
    };
    ListViewDirective.prototype.setupViewRef = function (viewRef, data, index) {
        viewRef.setLocal('\$implicit', data.item);
        viewRef.setLocal("item", data);
        viewRef.setLocal("index", index);
        viewRef.setLocal('even', (index % 2 == 0));
        viewRef.setLocal('odd', (index % 2 == 1));
    };
    __decorate([
        core_1.HostListener("itemLoading", ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ListViewDirective.prototype, "onItemLoading", null);
    ListViewDirective = __decorate([
        core_1.Directive({
            selector: 'ListView',
        }), 
        __metadata('design:paramtypes', [])
    ], ListViewDirective);
    return ListViewDirective;
}());
exports.ListViewDirective = ListViewDirective;
var ListItemTemplate = (function () {
    function ListItemTemplate(listDirective, _viewContainer) {
        this._viewContainer = _viewContainer;
        listDirective.registerItemTemplate(this);
    }
    ListItemTemplate.prototype.instantiateTemplate = function () {
        return this._viewContainer.createEmbeddedView(this.template);
    };
    __decorate([
        core_1.ContentChild(core_1.TemplateRef), 
        __metadata('design:type', core_1.TemplateRef)
    ], ListItemTemplate.prototype, "template", void 0);
    ListItemTemplate = __decorate([
        core_1.Component({
            selector: 'item-template',
            template: "",
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [ListViewDirective, core_1.ViewContainerRef])
    ], ListItemTemplate);
    return ListItemTemplate;
}());
exports.ListItemTemplate = ListItemTemplate;
function getSingleViewFromViewRef(viewRef) {
    var getSingleViewRecursive = function (nodes, nestLevel) {
        var actualNodes = nodes.filter(function (n) { return !!n && n.nodeName !== "#text"; });
        if (actualNodes.length === 0) {
            throw new Error("No suitable views found in list template! Nesting level: " + nestLevel);
        }
        else if (actualNodes.length > 1) {
            throw new Error("More than one view found in list template! Nesting level: " + nestLevel);
        }
        else {
            if (actualNodes[0]) {
                return actualNodes[0];
            }
            else {
                return getSingleViewRecursive(actualNodes[0].children, nestLevel + 1);
            }
        }
    };
    return getSingleViewRecursive(viewRef.rootNodes, 0);
}
//# sourceMappingURL=list-view.js.map