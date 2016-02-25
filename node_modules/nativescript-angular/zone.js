// Borrowed from the react-native-renderer project at:
// https://github.com/uber5001/react-native-renderer
//import NativeScriptPatch from "./zone_patch"
//var core = require('zone.js/lib/core.js');
//global.Zone = core.Zone;
//global.zone = new core.Zone();
//NativeScriptPatch.apply();
require("zone.js/dist/zone.js");
console.log('ZONE INITIALIZED');
console.log(global.setTimeout);
console.log(setInterval);
//# sourceMappingURL=zone.js.map