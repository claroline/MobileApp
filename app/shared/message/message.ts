export class Message{

	private _objet:string;
	private _contenu:string;
	private _sender:string;
	private _date:string;


	constructor(objet:string, contenu:string, sender:string, date:string){
		this._objet = objet;
		this._contenu = contenu;
		this._sender = sender;
		this._date = date;
	}	

	get objet():string{
		return this._objet;
	}

	set objet(newObjet:string){
		this._objet = newObjet;
	}

	get contenu():string{
		return this._contenu;
	}

	set contenu(newContenu:string){
		this._contenu = newContenu;
	}

	get sender():string{
		return this._sender;
	}

	set sender(newSender:string){
		this._sender = newSender;
	}

	get date():string{
		return this._date;
	}

	set date(newDate:string){
		this._date = newDate;
	}








}