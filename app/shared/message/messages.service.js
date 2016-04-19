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
                var date = msg.message.date;
                var to = msg.message.to;
                receivedMessages.push(new message_1.Message(objet, contenu, date, sender, to));
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
                var sender = msg.message.user.firstName + " " + msg.message.user.lastName + " (" + msg.message.sender_username + ")";
                var objet = msg.message.object;
                var contenu = msg.message.content;
                var date = msg.message.date;
                var to = msg.message.to;
                sentMessages.push(new message_1.Message(objet, contenu, date, sender, to));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBcUIsV0FBVyxDQUFDLENBQUE7QUFFakMscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLHdCQUFzQixXQUFXLENBQUMsQ0FBQTtBQUVsQyxZQUFZLENBQUM7QUFHYjtJQUVDLHdCQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUFFLENBQUM7SUFFakMsNkNBQW9CLEdBQXBCO1FBQ0MsSUFBSSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBQyxrREFBa0QsR0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO1FBQy9GLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDekIsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNSLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO2dCQUVoQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUUsR0FBRyxHQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUMsR0FBRyxDQUFDO2dCQUM1RyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUM1QixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxLQUFLLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVwRSxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEI7UUFDQyxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFDLDhDQUE4QyxHQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7UUFDM0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUN6QixHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1IsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUNmLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRSxHQUFHLEdBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksR0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7Z0JBQzVHLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUMvQixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUN4QixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxLQUFLLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBN0NGO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUE4Q2IscUJBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDO0FBN0NZLHNCQUFjLGlCQTZDMUIsQ0FBQSJ9