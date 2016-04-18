import {Injectable} from "angular2/core";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import {Http} from "angular2/http";
import {Message} from "./message";

"use strict";

@Injectable()
export class MessageService{

	constructor(private _http:Http){}

	loadReceivedMessages(){
		let url = Config.apiUrl+"message/api/received/messages.json?access_token="+Config.access_token;
		return this._http.get(url)
		.map(res=>{
			return res.json();
		})
		.map(data=>{
			let receivedMessages = [];
			data.forEach((msg)=>{

				let sender = msg.message.user.firstName+ " "+msg.message.user.lastName+" ("+msg.message.sender_username+")";
				let objet = msg.message.object;
				let contenu = msg.message.content;
				let date = msg.message.date;
				receivedMessages.push(new Message(objet,contenu, sender, date));

			});
			return receivedMessages;
		});
	}

	/*loadSentMessages(){
		let url = Config.apiUrl+"message/api/sent/messages.json?access_token="+Config.access_token;
		return this._http.get(url)
		.map(res=>{
			return res.json();
		})
		.map(data=>{
			let sentMessages = [];
			data.forEach(msg=>{
				
			});
			return sentMessages;
		});
	}*/
}