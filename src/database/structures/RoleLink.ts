export default class RoleLink {
    id: Number;
    messageId: String;
    roleId: string;
    emoteId: string;
    constructor(d: any) {
        this.id = d.id;
        this.messageId = d.message_id;
        this.roleId = d.role_id;
        this.emoteId = d.emote_id;
    }
}

export {RoleLink};