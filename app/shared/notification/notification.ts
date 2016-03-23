export class Notification {
    constructor(public id: string, public doer: string, public actionKey: string, public role?: string, public workspace?: string, public resource?: string) { }
}
