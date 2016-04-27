import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Rx";
import {Http} from "angular2/http";
import {Message} from "./message";
import {ConfigService} from "../config.service";

"use strict";

@Injectable()
export class MessageService{

	constructor(private _http:Http,
		private _configService:ConfigService){}

	loadReceivedMessages(){

		let host = this._configService.getHost();
		let access = this._configService.getAccessToken();
		let url = host+"/message/api/received/messages.json?access_token="+access;
		return this._http.get(url)
		.map(res=>{
			return res.json();
		})
		.map(data=>{
			if (data.length == 0){
				return;
			}
			let receivedMessages = [];
			data.forEach((msg)=>{

				let sender = msg.message.user.firstName+ " "+msg.message.user.lastName+" ("+msg.message.sender_username+")";
				let objet = msg.message.object;
				let contenu = msg.message.content;
				let date = msg.message.date;
				let to = msg.message.to;
				receivedMessages.push(new Message(objet,contenu, date, sender,to));

			});
			return receivedMessages;
		});
	}

	loadSentMessages(){

		let host = this._configService.getHost();
		let access = this._configService.getAccessToken();
		let url = host+"/message/api/sent/messages.json?access_token="+access;
		return this._http.get(url)
		.map(res=>{
			return res.json();
		})
		.map(data=>{
			if (data.length == 0) {
				return;
			}
			let sentMessages = [];
			data.forEach(msg=>{
				let sender = msg.message.user.firstName+ " "+msg.message.user.lastName+" ("+msg.message.sender_username+")";
				let objet = msg.message.object;
				let contenu = msg.message.content;
				let date = msg.message.date;
				let to = msg.message.to;
				sentMessages.push(new Message(objet,contenu, date, sender,to));
			});
			return sentMessages;
		});
	}
}