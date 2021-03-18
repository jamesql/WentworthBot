export default class RoleLink {
    id: Number;
    roleId: string;
    emoteId: string;
    constructor(d: any) {
        this.id = d.id;
        this.roleId = d.role_id;
        this.emoteId = d.emote_id;
    }
}

export {RoleLink};