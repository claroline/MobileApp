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
var core_1 = require('angular2/core');
var collection_1 = require('angular2/src/facade/collection');
var elementRegistry = require('nativescript-angular/element-registry');
var listview_1 = require('./../listview');
var layout_base_1 = require('ui/layouts/layout-base');
var observable_array_1 = require('data/observable-array');
var di_1 = require('angular2/src/core/di');
var RadListViewComponent = (function () {
    function RadListViewComponent(_elementRef, _iterableDiffers, _cdr, _appViewManager) {
        this._elementRef = _elementRef;
        this._iterableDiffers = _iterableDiffers;
        this._cdr = _cdr;
        this._appViewManager = _appViewManager;
        this._itemReordering = false;
        this.setupItemView = new core_1.EventEmitter();
        this.doCheckDelay = 5;
        this._nativeList = _elementRef.nativeElement;
        this._nativeList.listViewLayout = new listview_1.ListViewLinearLayout();
        var component = this;
        this._nativeList.itemViewLoader = function (viewType) {
            switch (viewType) {
                case listview_1.ListViewViewTypes.ItemView:
                    if (component._itemTemplate) {
                        var nativeItem = component._appViewManager.createEmbeddedViewInContainer(component._elementRef, 0, component._itemTemplate);
                        var typedView = getSingleViewFromViewRef(nativeItem);
                        typedView["ng_view"] = nativeItem;
                        return typedView;
                    }
                    break;
                case listview_1.ListViewViewTypes.ItemSwipeView:
                    if (component._itemSwipeTemplate) {
                        var nativeItem = component._appViewManager.createEmbeddedViewInContainer(component._elementRef, 0, component._itemSwipeTemplate);
                        var typedView = getSingleViewFromViewRef(nativeItem);
                        typedView["ng_view"] = nativeItem;
                        return typedView;
                    }
                    break;
                case listview_1.ListViewViewTypes.LoadOnDemandView:
                    if (component._loadOnDemandTemplate) {
                        var viewRef = component._appViewManager.createEmbeddedViewInContainer(component._elementRef, 0, component._loadOnDemandTemplate);
                        var nativeView = getSingleViewFromViewRef(viewRef);
                        nativeView["ng_view"] = viewRef;
                        return nativeView;
                    }
                    break;
                case listview_1.ListViewViewTypes.HeaderView:
                    if (component._headerTemplate) {
                        var viewRef = component._appViewManager.createEmbeddedViewInContainer(component._elementRef, 0, component._headerTemplate);
                        var nativeView = getSingleViewFromViewRef(viewRef);
                        nativeView["ng_view"] = viewRef;
                        return nativeView;
                    }
                    break;
                case listview_1.ListViewViewTypes.FooterView:
                    if (component._footerTemplate) {
                        var viewRef = component._appViewManager.createEmbeddedViewInContainer(component._elementRef, 0, component._footerTemplate);
                        var nativeView = getSingleViewFromViewRef(viewRef);
                        nativeView["ng_view"] = viewRef;
                        return nativeView;
                    }
                    break;
            }
        };
    }
    Object.defineProperty(RadListViewComponent.prototype, "pullToRefresh", {
        set: function (value) {
            this._pullToRefresh = value;
            this.updatePullToRefresh();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "loadOnDemandBufferSize", {
        set: function (value) {
            this._loadOnDemandBufferSize = value;
            this.updateLoadOnDemandBufferSize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "multipleSelection", {
        set: function (value) {
            this._multipleSelection = value;
            this.updateMultipleSelection();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "selectionMode", {
        set: function (value) {
            this._selectionMode = value;
            this.updateSelectionMode();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "loadOnDemandTemplate", {
        set: function (value) {
            this._loadOnDemandTemplate = value;
            this._nativeList.refresh();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "loadOnDemandMode", {
        set: function (value) {
            this._loadOnDemandMode = value;
            this.updateLoadOnDemandMode();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "itemSwipe", {
        set: function (value) {
            this._itemSwipe = value;
            this.updateItemSwipe();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "itemReorderMode", {
        set: function (value) {
            this._itemReorderMode = value;
            this.updateItemReorder();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "itemReorder", {
        set: function (value) {
            this._itemReorder = value;
            this.updateItemReorder();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "headerTemplate", {
        set: function (value) {
            this._headerTemplate = value;
            if (this._nativeList.ios) {
                this._nativeList._updateHeaderFooterAvailability();
            }
            else if (this._nativeList.android) {
                this._nativeList._updateHeaderFooter();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "footerTemplate", {
        set: function (value) {
            this._footerTemplate = value;
            if (this._nativeList.ios) {
                this._nativeList._updateHeaderFooterAvailability();
            }
            else if (this._nativeList.android) {
                this._nativeList._updateHeaderFooter();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "itemTemplate", {
        set: function (value) {
            this._itemTemplate = value;
            this._nativeList.refresh();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "itemSwipeTemplate", {
        set: function (value) {
            this._itemSwipeTemplate = value;
            this._nativeList.refresh();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadListViewComponent.prototype, "items", {
        set: function (value) {
            this._items = value;
            var needDiffer = true;
            if (value instanceof observable_array_1.ObservableArray) {
                needDiffer = false;
            }
            if (needDiffer && !this._differ && collection_1.isListLikeIterable(value)) {
                this._differ = this._iterableDiffers.find(this._items).create(this._cdr, function (index, item) { return item; });
            }
            this._nativeList.items = this._items;
        },
        enumerable: true,
        configurable: true
    });
    RadListViewComponent.prototype.updatePullToRefresh = function () {
        this._nativeList.pullToRefresh = this._pullToRefresh;
    };
    RadListViewComponent.prototype.updateLoadOnDemandBufferSize = function () {
        this._nativeList.loadOnDemandBufferSize = this._loadOnDemandBufferSize;
    };
    RadListViewComponent.prototype.updateMultipleSelection = function () {
        this._nativeList.multipleSelection = this._multipleSelection;
    };
    RadListViewComponent.prototype.updateSelectionMode = function () {
        this._nativeList.selectionBehavior = this._selectionMode;
    };
    RadListViewComponent.prototype.updateLoadOnDemandMode = function () {
        this._nativeList.loadOnDemandMode = this._loadOnDemandMode;
    };
    RadListViewComponent.prototype.updateReorderMode = function () {
        this._nativeList.itemReorderMode = this._itemReorderMode;
    };
    RadListViewComponent.prototype.updateItemReorder = function () {
        this._nativeList.itemReorder = this._itemReorder;
    };
    RadListViewComponent.prototype.updateItemSwipe = function () {
        this._nativeList.itemSwipe = this._itemSwipe;
    };
    RadListViewComponent.prototype.getDataItem = function (index) {
        return typeof (this._items.getItem) === "function" ? this._items.getItem(index) : this._items[index];
    };
    RadListViewComponent.prototype.onItemLoading = function (args) {
        var index = args.itemIndex;
        var currentItem = this.getDataItem(index);
        var ngView = args.view["ng_view"];
        if (ngView) {
            this.setupViewRef(ngView, currentItem, index);
        }
    };
    RadListViewComponent.prototype.setupViewRef = function (viewRef, data, index) {
        viewRef.setLocal('\$implicit', data);
        viewRef.setLocal("item", data);
        viewRef.setLocal("index", index);
        viewRef.setLocal('even', (index % 2 == 0));
        viewRef.setLocal('odd', (index % 2 == 1));
        this.setupItemView.next({ 'view': viewRef, 'data': data, 'index': index });
    };
    RadListViewComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this._itemReordering === true) {
            return;
        }
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(function () {
            clearTimeout(_this.timerId);
            if (_this._differ) {
                var changes = _this._differ.diff(_this._items);
                if (changes) {
                    _this._nativeList.refresh();
                }
            }
        }, this.doCheckDelay);
    };
    __decorate([
        core_1.Output()
    ], RadListViewComponent.prototype, "setupItemView", void 0);
    __decorate([
        core_1.HostListener("itemLoading", ['$event'])
    ], RadListViewComponent.prototype, "onItemLoading", null);
    RadListViewComponent = __decorate([
        core_1.Component({
            selector: "RadListView",
            template: "",
            inputs: ['items']
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(core_1.IterableDiffers)),
        __param(2, core_1.Inject(core_1.ChangeDetectorRef)),
        __param(3, core_1.Inject(core_1.AppViewManager))
    ], RadListViewComponent);
    return RadListViewComponent;
}());
exports.RadListViewComponent = RadListViewComponent;
var ListViewHeaderDirective = (function () {
    function ListViewHeaderDirective(owner, template) {
        this.owner = owner;
        this.template = template;
    }
    ListViewHeaderDirective.prototype.ngOnInit = function () {
        this.owner.headerTemplate = this.template;
    };
    ListViewHeaderDirective = __decorate([
        core_1.Directive({
            selector: "[listViewHeader]"
        }),
        __param(0, core_1.Inject(RadListViewComponent)),
        __param(1, core_1.Inject(core_1.TemplateRef))
    ], ListViewHeaderDirective);
    return ListViewHeaderDirective;
}());
exports.ListViewHeaderDirective = ListViewHeaderDirective;
var ListViewFooterDirective = (function () {
    function ListViewFooterDirective(owner, template) {
        this.owner = owner;
        this.template = template;
    }
    ListViewFooterDirective.prototype.ngOnInit = function () {
        this.owner.footerTemplate = this.template;
    };
    ListViewFooterDirective = __decorate([
        core_1.Directive({
            selector: "[listViewFooter]"
        }),
        __param(0, core_1.Inject(RadListViewComponent)),
        __param(1, core_1.Inject(core_1.TemplateRef))
    ], ListViewFooterDirective);
    return ListViewFooterDirective;
}());
exports.ListViewFooterDirective = ListViewFooterDirective;
var ListViewItemSwipeDirective = (function () {
    function ListViewItemSwipeDirective(owner, template) {
        this.owner = owner;
        this.template = template;
    }
    ListViewItemSwipeDirective.prototype.ngOnInit = function () {
        this.owner.itemSwipeTemplate = this.template;
    };
    ListViewItemSwipeDirective = __decorate([
        core_1.Directive({
            selector: "[listItemSwipeTemplate]"
        }),
        __param(0, core_1.Inject(RadListViewComponent)),
        __param(1, core_1.Inject(core_1.TemplateRef))
    ], ListViewItemSwipeDirective);
    return ListViewItemSwipeDirective;
}());
exports.ListViewItemSwipeDirective = ListViewItemSwipeDirective;
var ListViewItemDirective = (function () {
    function ListViewItemDirective(owner, template) {
        this.owner = owner;
        this.template = template;
    }
    ListViewItemDirective.prototype.ngOnInit = function () {
        this.owner.itemTemplate = this.template;
    };
    ListViewItemDirective = __decorate([
        core_1.Directive({
            selector: "[listItemTemplate]"
        }),
        __param(0, core_1.Inject(RadListViewComponent)),
        __param(1, core_1.Inject(core_1.TemplateRef))
    ], ListViewItemDirective);
    return ListViewItemDirective;
}());
exports.ListViewItemDirective = ListViewItemDirective;
var ListViewLoadOnDemandDirective = (function () {
    function ListViewLoadOnDemandDirective(owner, template) {
        this.owner = owner;
        this.template = template;
    }
    ListViewLoadOnDemandDirective.prototype.ngOnInit = function () {
        this.owner.loadOnDemandTemplate = this.template;
    };
    ListViewLoadOnDemandDirective = __decorate([
        core_1.Directive({
            selector: "[listLoadOnDemandTemplate]"
        }),
        __param(0, core_1.Inject(RadListViewComponent)),
        __param(1, core_1.Inject(core_1.TemplateRef))
    ], ListViewLoadOnDemandDirective);
    return ListViewLoadOnDemandDirective;
}());
exports.ListViewLoadOnDemandDirective = ListViewLoadOnDemandDirective;
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
                var parentLayout = actualNodes[0].parent;
                if (parentLayout instanceof layout_base_1.LayoutBase) {
                    parentLayout.removeChild(actualNodes[0]);
                }
                return actualNodes[0];
            }
            else {
                return getSingleViewRecursive(actualNodes[0].children, nestLevel + 1);
            }
        }
    };
    return getSingleViewRecursive(viewRef.rootNodes, 0);
}
exports.LISTVIEW_DIRECTIVES = [RadListViewComponent, ListViewItemDirective, ListViewItemSwipeDirective, ListViewHeaderDirective, ListViewFooterDirective, ListViewLoadOnDemandDirective];
exports.LISTVIEW_PROVIDERS = [di_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: exports.LISTVIEW_DIRECTIVES, multi: true })];
elementRegistry.registerElement("RadListView", function () { return listview_1.RadListView; });
