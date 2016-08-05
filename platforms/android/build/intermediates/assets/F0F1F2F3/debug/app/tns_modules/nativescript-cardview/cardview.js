"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var content_view_1 = require('ui/content-view');
var style = require("ui/styling/style");
var color = require("color");
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(CardView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "radius", {
        set: function (value) {
            this._radius = value;
            if (this._android)
                this._android.setRadius(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "elevation", {
        set: function (value) {
            this._elevation = value;
            if (this._android)
                this._android.setCardElevation(value);
        },
        enumerable: true,
        configurable: true
    });
    CardView.prototype._createUI = function () {
        this._android = new android.support.v7.widget.CardView(this._context);
        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);
        if (this._radius)
            this.radius = this._radius;
        if (this._elevation)
            this.elevation = this._elevation;
    };
    return CardView;
}(content_view_1.ContentView));
exports.CardView = CardView;
var CardViewStyler = (function () {
    function CardViewStyler() {
    }
    CardViewStyler.setBackgroundProperty = function (view, newValue) {
        var card = view.android;
        var droidColor = new color.Color(newValue).android;
        card.setCardBackgroundColor(droidColor);
    };
    CardViewStyler.resetBackgroundProperty = function (view, nativeValue) {
    };
    CardViewStyler.registerHandlers = function () {
        style.registerHandler(style.backgroundColorProperty, new style.StylePropertyChangedHandler(CardViewStyler.setBackgroundProperty, CardViewStyler.resetBackgroundProperty), "CardView");
        style.registerHandler(style.backgroundInternalProperty, style.ignorePropertyHandler, "CardView");
    };
    return CardViewStyler;
}());
exports.CardViewStyler = CardViewStyler;
CardViewStyler.registerHandlers();
//# sourceMappingURL=cardview.js.map