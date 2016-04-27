var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./cardview-common");
var proxy_1 = require("ui/core/proxy");
var dependency_observable_1 = require("ui/core/dependency-observable");
global.moduleMerge(common, exports);
var radiusProp = new dependency_observable_1.Property("radius", "CardView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var elevationProp = new dependency_observable_1.Property("elevation", "CardView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        _super.call(this);
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
        get: function () {
            return this._getValue(CardView.radiusProp);
        },
        set: function (value) {
            this._setValue(CardView.radiusProp, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "elevation", {
        get: function () {
            return this._getValue(CardView.elevationProp);
        },
        set: function (value) {
            this._setValue(CardView.elevationProp, value);
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
        if (this.radius)
            this._android.setRadius(this.radius);
        if (this.elevation)
            this._android.setCardElevation(this.elevation);
    };
    CardView.radiusProp = radiusProp;
    CardView.elevationProp = elevationProp;
    return CardView;
})(common.CardView);
exports.CardView = CardView;
//# sourceMappingURL=cardview.android.js.map