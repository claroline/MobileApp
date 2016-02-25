"use strict";
var elementMap = new Map();
function registerElement(elementName, resolver) {
    if (elementMap.has(elementName)) {
        throw new Error("Element for " + elementName + " already registered.");
    }
    else {
        elementMap.set(elementName, resolver);
        elementMap.set(elementName.toLowerCase(), resolver);
    }
}
exports.registerElement = registerElement;
function getViewClass(elementName) {
    var resolver = elementMap.get(elementName) ||
        elementMap.get(elementName.toLowerCase());
    if (!resolver) {
        throw new TypeError("No known component for element " + elementName + ".");
    }
    try {
        return resolver();
    }
    catch (e) {
        throw new TypeError("Could not load view for: " + elementName + ".\n\n" + e);
    }
}
exports.getViewClass = getViewClass;
function isKnownView(elementName) {
    return elementMap.has(elementName) ||
        elementMap.has(elementName.toLowerCase());
}
exports.isKnownView = isKnownView;
//Register default NativeScript components
registerElement("AbsoluteLayout", function () { return require("ui/layouts/absolute-layout").AbsoluteLayout; });
registerElement("ActionBar", function () { return require("ui/action-bar").ActionBar; });
registerElement("ActionItem", function () { return require("ui/action-bar").ActionItem; });
registerElement("ActivityIndicator", function () { return require("ui/activity-indicator").ActivityIndicator; });
registerElement("Border", function () { return require("ui/border").Border; });
registerElement("Button", function () { return require("ui/button").Button; });
registerElement("ContentView", function () { return require("ui/content-view").ContentView; });
registerElement("DatePicker", function () { return require("ui/date-picker").DatePicker; });
registerElement("DockLayout", function () { return require("ui/layouts/dock-layout").DockLayout; });
registerElement("GridLayout", function () { return require("ui/layouts/grid-layout").GridLayout; });
registerElement("HtmlView", function () { return require("ui/html-view").HtmlView; });
registerElement("Image", function () { return require("ui/image").Image; });
// Parse5 changes <Image> tags to <img>. WTF!
registerElement("img", function () { return require("ui/image").Image; });
registerElement("Label", function () { return require("ui/label").Label; });
registerElement("ListPicker", function () { return require("ui/list-picker").ListPicker; });
registerElement("ListView", function () { return require("ui/list-view").ListView; });
registerElement("Page", function () { return require("ui/page").Page; });
registerElement("Placeholder", function () { return require("ui/placeholder").Placeholder; });
registerElement("Progress", function () { return require("ui/progress").Progress; });
registerElement("Repeater", function () { return require("ui/repeater").Repeater; });
registerElement("ScrollView", function () { return require("ui/scroll-view").ScrollView; });
registerElement("SearchBar", function () { return require("ui/search-bar").SearchBar; });
registerElement("SegmentedBar", function () { return require("ui/segmented-bar").SegmentedBar; });
registerElement("Slider", function () { return require("ui/slider").Slider; });
registerElement("StackLayout", function () { return require("ui/layouts/stack-layout").StackLayout; });
registerElement("Switch", function () { return require("ui/switch").Switch; });
registerElement("TabView", function () { return require("ui/tab-view").TabView; });
registerElement("TextField", function () { return require("ui/text-field").TextField; });
registerElement("TextView", function () { return require("ui/text-view").TextView; });
registerElement("TimePicker", function () { return require("ui/time-picker").TimePicker; });
registerElement("WebView", function () { return require("ui/web-view").WebView; });
registerElement("WrapLayout", function () { return require("ui/layouts/wrap-layout").WrapLayout; });
registerElement("ProxyViewContainer", function () { return require("ui/proxy-view-container").ProxyViewContainer; });
//# sourceMappingURL=element-registry.js.map