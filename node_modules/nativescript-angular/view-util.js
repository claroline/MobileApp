"use strict";
var types_1 = require("utils/types");
var view_1 = require("ui/core/view");
var placeholder_1 = require("ui/placeholder");
var content_view_1 = require('ui/content-view');
var layout_base_1 = require('ui/layouts/layout-base');
var element_registry_1 = require('./element-registry');
var special_properties_1 = require("ui/builder/special-properties");
var trace = require("trace");
exports.rendererTraceCategory = "ns-renderer";
function traceLog(msg) {
    trace.write(msg, exports.rendererTraceCategory);
}
exports.traceLog = traceLog;
function isView(view) {
    return view instanceof view_1.View;
}
exports.isView = isView;
function isLayout(view) {
    return view instanceof layout_base_1.LayoutBase;
}
exports.isLayout = isLayout;
function isContentView(view) {
    return view instanceof content_view_1.ContentView;
}
exports.isContentView = isContentView;
function isComplexProperty(view) {
    var name = view.nodeName;
    return types_1.isString(name) && name.indexOf(".") !== -1;
}
function insertChild(parent, child, atIndex) {
    if (atIndex === void 0) { atIndex = -1; }
    if (isLayout(parent)) {
        if (atIndex !== -1) {
            parent.insertChild(child, atIndex);
        }
        else {
            parent.addChild(child);
        }
    }
    else if (isContentView(parent)) {
        parent.content = child;
    }
    else {
    }
}
exports.insertChild = insertChild;
function removeChild(parent, child) {
    if (isLayout(parent)) {
        parent.removeChild(child);
    }
    else if (isContentView(parent)) {
        if (parent.content === child) {
            parent.content = null;
        }
    }
    else if (isView(parent)) {
        parent._removeView(child);
    }
    else {
    }
}
exports.removeChild = removeChild;
function getChildIndex(parent, child) {
    if (isLayout(parent)) {
        return parent.getChildIndex(child);
    }
    else if (isContentView(parent)) {
        return child === parent.content ? 0 : -1;
    }
    else {
    }
}
exports.getChildIndex = getChildIndex;
function createAndAttach(name, viewClass, parent) {
    var view = new viewClass();
    view.nodeName = name;
    if (parent) {
        insertChild(parent, view);
    }
    return view;
}
function createView(name, parent) {
    if (element_registry_1.isKnownView(name)) {
        var viewClass = element_registry_1.getViewClass(name);
        return createAndAttach(name, viewClass, parent);
    }
    else {
        return createViewContainer(name, parent);
    }
}
exports.createView = createView;
function createText(value) {
    var text = new placeholder_1.Placeholder();
    text.nodeName = "#text";
    text.visibility = "collapse";
    return text;
}
exports.createText = createText;
function createViewContainer(name, parentElement) {
    //HACK: Using a ContentView here, so that it creates a native View object
    traceLog('Creating view container in:' + parentElement);
    var layout = createView('ProxyViewContainer', parentElement);
    layout.nodeName = 'ProxyViewContainer';
    return layout;
}
exports.createViewContainer = createViewContainer;
function createTemplateAnchor(parentElement) {
    //HACK: Using a ContentView here, so that it creates a native View object
    var anchor = createAndAttach('ContentView', content_view_1.ContentView, parentElement);
    anchor.visibility = "collapse";
    anchor.templateParent = parentElement;
    return anchor;
}
exports.createTemplateAnchor = createTemplateAnchor;
function isXMLAttribute(name) {
    switch (name) {
        case "style": return true;
        case "rows": return true;
        case "columns": return true;
        case "fontAttributes": return true;
        default: return false;
    }
}
function setProperty(view, attributeName, value) {
    traceLog('Setting attribute: ' + attributeName);
    var specialSetter = special_properties_1.getSpecialPropertySetter(attributeName);
    var propMap = getProperties(view);
    if (attributeName === "class") {
        setClasses(view, value);
    }
    else if (isXMLAttribute(attributeName)) {
        view._applyXmlAttribute(attributeName, value);
    }
    else if (specialSetter) {
        specialSetter(view, value);
    }
    else if (propMap.has(attributeName)) {
        // We have a lower-upper case mapped property.
        var propertyName = propMap.get(attributeName);
        view[propertyName] = value;
    }
    else {
        // Unknown attribute value -- just set it to our object as is.
        view[attributeName] = value;
    }
}
exports.setProperty = setProperty;
var propertyMaps = new Map();
function getProperties(instance) {
    var type = instance && instance.constructor;
    if (!type) {
        return new Map();
    }
    if (!propertyMaps.has(type)) {
        var propMap = new Map();
        for (var propName in instance) {
            propMap.set(propName.toLowerCase(), propName);
        }
        propertyMaps.set(type, propMap);
    }
    return propertyMaps.get(type);
}
function cssClasses(view) {
    if (!view.cssClasses) {
        view.cssClasses = new Map();
    }
    return view.cssClasses;
}
function addClass(view, className) {
    cssClasses(view).set(className, true);
    syncClasses(view);
}
exports.addClass = addClass;
function removeClass(view, className) {
    cssClasses(view).delete(className);
    syncClasses(view);
}
exports.removeClass = removeClass;
var whiteSpaceSplitter = /\s+/;
function setClasses(view, classesValue) {
    var classes = classesValue.split(whiteSpaceSplitter);
    classes.forEach(function (className) { return cssClasses(view).set(className, true); });
    syncClasses(view);
}
function syncClasses(view) {
    var classValue = Array.from(cssClasses(view).keys()).join(' ');
    view.cssClass = classValue;
}
function setStyleProperty(view, styleName, styleValue) {
    throw new Error("Not implemented: setStyleProperty");
}
exports.setStyleProperty = setStyleProperty;
//# sourceMappingURL=view-util.js.map