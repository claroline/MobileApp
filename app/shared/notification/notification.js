"use strict";
var Notification = (function () {
    function Notification(id, actionKey, status, text, doer, role, workspace, resource) {
        this.id = id;
        this.actionKey = actionKey;
        this.status = status;
        this.text = text;
        this.doer = doer;
        this.role = role;
        this.workspace = workspace;
        this.resource = resource;
    }
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUVJLHNCQUFtQixFQUFVLEVBQVMsU0FBaUIsRUFBUyxNQUFlLEVBQVMsSUFBWSxFQUFTLElBQWEsRUFDL0csSUFBYSxFQUFTLFNBQWtCLEVBQVMsUUFBaUI7UUFEMUQsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVM7UUFDL0csU0FBSSxHQUFKLElBQUksQ0FBUztRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO0lBQUksQ0FBQztJQU90RixtQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksb0JBQVksZUFVeEIsQ0FBQSJ9