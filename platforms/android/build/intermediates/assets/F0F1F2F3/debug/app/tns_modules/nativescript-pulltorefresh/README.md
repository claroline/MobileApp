[![npm](https://img.shields.io/npm/v/nativescript-pulltorefresh.svg)](https://www.npmjs.com/package/nativescript-pulltorefresh)
[![npm](https://img.shields.io/npm/dt/nativescript-pulltorefresh.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-pulltorefresh)

# NativeScript-PullToRefresh :recycle:
NativeScript plugin to use Pull to Refresh on any view. 

#### [Android - *SwipeRefreshLayout*](http://developer.android.com/reference/android/support/v4/widget/SwipeRefreshLayout.html)

#### [iOS - *UIRefreshControl*](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIRefreshControl_class/)

### Sample Screen

Android |  iOS
-------- | ---------
![Android Sample](screens/android_refresh.gif) | ![iOS Sample](screens/ios_refresh.gif)


## Installation
`npm install nativescript-pulltorefresh`

## Usage

###
```XML
<page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:PullRefresh="nativescript-pulltorefresh"
      loaded="pageLoaded">
    <stack-layout>   
        <PullRefresh:PullToRefresh refresh="refreshList">
            <list-view items="{{ users }}">
                <list-view.itemTemplate>
                    <label text="{{ name }}" row="0" col="1" textWrap="true" class="message" />                            
                </list-view.itemTemplate>
            </list-view>
        </PullRefresh:PullToRefresh>        
    </stack-layout>
</page>
```

###
```JS
function refreshList(args) {

    // Get reference to the PullToRefresh;
    var pullRefresh = args.object;

    // Do work here... and when done call set refreshing property to false to stop the refreshing
    loadItems().then(function (resp) {
        // ONLY USING A TIMEOUT TO SIMULATE/SHOW OFF THE REFRESHING
        setTimeout(function () {
            pullRefresh.refreshing = false;
        }, 1000);
    }, function (err) {
        pullRefresh.refreshing = false;
    });
}
exports.refreshList = refreshList;
```


## Attributes
**refresh : function** *required*

## API

### refreshing

Property. Notifies the widget that the refresh state has changed.
