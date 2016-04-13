"use strict";
var Message = (function () {
    function Message(objet, contenu, sender, date) {
        this._objet = objet;
        this._contenu = contenu;
        this._sender = sender;
        this._date = date;
    }
    Object.defineProperty(Message.prototype, "objet", {
        get: function () {
            return this._objet;
        },
        set: function (newObjet) {
            this._objet = newObjet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "contenu", {
        get: function () {
            return this._contenu;
        },
        set: function (newContenu) {
            this._contenu = newContenu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "sender", {
        get: function () {
            return this._sender;
        },
        set: function (newSender) {
            this._sender = newSender;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (newDate) {
            this._date = newDate;
        },
        enumerable: true,
        configurable: true
    });
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBUUMsaUJBQVksS0FBWSxFQUFFLE9BQWMsRUFBRSxNQUFhLEVBQUUsSUFBVztRQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsc0JBQUksMEJBQUs7YUFBVDtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BCLENBQUM7YUFFRCxVQUFVLFFBQWU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDeEIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw0QkFBTzthQUFYO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVksVUFBaUI7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwyQkFBTTthQUFWO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQVcsU0FBZ0I7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx5QkFBSTthQUFSO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQzthQUVELFVBQVMsT0FBYztZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FKQTtJQWFGLGNBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDO0FBdERZLGVBQU8sVUFzRG5CLENBQUEifQ==