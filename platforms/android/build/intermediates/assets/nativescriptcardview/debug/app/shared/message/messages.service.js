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
var core_1 = require("angular2/core");
var config_1 = require("../config");
var http_1 = require("angular2/http");
var message_1 = require("./message");
"use strict";
var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
    }
    MessageService.prototype.loadReceivedMessages = function () {
        var url = config_1.Config.apiUrl + "message/api/received/messages.json?access_token=" + config_1.Config.access_token;
        return this._http.get(url)
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            var receivedMessages = [];
            data.forEach(function (msg) {
                var sender = msg.message.user.firstName + " " + msg.message.user.lastName + " (" + msg.message.sender_username + ")";
                var objet = msg.message.object;
                var contenu = msg.message.content;
                contenu = contenu.replace(/<\/?[^>]+(>|$)/g, "");
                var date = msg.message.date;
                receivedMessages.push(new message_1.Message(objet, contenu, sender, date));
            });
            return receivedMessages;
        });
    };
    MessageService.prototype.loadSentMessages = function () {
        var url = config_1.Config.apiUrl + "message/api/sent/messages.json?access_token=" + config_1.Config.access_token;
        return this._http.get(url)
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            var sentMessages = [];
            data.forEach(function (msg) {
            });
            return sentMessages;
        });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBcUIsV0FBVyxDQUFDLENBQUE7QUFFakMscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLHdCQUFzQixXQUFXLENBQUMsQ0FBQTtBQUVsQyxZQUFZLENBQUM7QUFHYjtJQUVDLHdCQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUFFLENBQUM7SUFFakMsNkNBQW9CLEdBQXBCO1FBQ0MsSUFBSSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBQyxrREFBa0QsR0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO1FBQy9GLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDekIsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNSLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUVmLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRSxHQUFHLEdBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksR0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7Z0JBQzVHLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUMvQixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUM1QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLEtBQUssRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFakUsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0MsSUFBSSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBQyw4Q0FBOEMsR0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO1FBQzNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDekIsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNSLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUVoQixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBeENGO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUF5Q2IscUJBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLHNCQUFjLGlCQXdDMUIsQ0FBQSJ9