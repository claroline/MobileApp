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
var http_1 = require("angular2/http");
var message_1 = require("./message");
var config_service_1 = require("../config.service");
"use strict";
var MessageService = (function () {
    function MessageService(_http, _configService) {
        this._http = _http;
        this._configService = _configService;
    }
    MessageService.prototype.loadReceivedMessages = function () {
        var host = this._configService.getHost();
        var access = this._configService.getAccessToken();
        var url = host + "/message/api/received/messages.json?access_token=" + access;
        return this._http.get(url)
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            if (data.length == 0) {
                return;
            }
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
        var host = this._configService.getHost();
        var access = this._configService.getAccessToken();
        var url = host + "/message/api/sent/messages.json?access_token=" + access;
        return this._http.get(url)
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            if (data.length == 0) {
                return;
            }
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
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6QyxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLCtCQUE0QixtQkFBbUIsQ0FBQyxDQUFBO0FBRWhELFlBQVksQ0FBQztBQUdiO0lBRUMsd0JBQW9CLEtBQVUsRUFDckIsY0FBNEI7UUFEakIsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBYztJQUFFLENBQUM7SUFFeEMsNkNBQW9CLEdBQXBCO1FBRUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksR0FBRyxHQUFHLElBQUksR0FBQyxtREFBbUQsR0FBQyxNQUFNLENBQUM7UUFDMUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUN6QixHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNyQixNQUFNLENBQUM7WUFDUixDQUFDO1lBQ0QsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBRWhCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxD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