import {
    Autorole,
    Birthday,
    RoleLink
} from "./structures";
import mysql, { Connection, Query } from "mysql";
import config from "../config";

export default class Database {
    static db: Connection;
    constructor() {
        if (!Database.db)
            Database.connect();
    }

    static connect() {
        const cfg = config.database;

        Database.db = mysql.createConnection({
            host: cfg.ip,
            user: cfg.username,
            password: cfg.password,
            database: cfg.database
        });
    }

    static disconnect() { Database.db.end(); }

    execute(q: string, args: any) : Promise<Query> {
        if (!Database.db) throw new TypeError("Conn null;");
        return new Promise<Query>( (resolve,reject)=> {
            Database.db.query(q, args, (err, res) => { if (err) return reject(err);
                resolve(res);
            });
        });
    }

    async getAllBirthdays() : Promise<Birthday[]> {
        const r = await this.execute("SELECT * FROM bd", []);
        let i = 0, d: Birthday[] = [];
        while(r[i]) d[i]=new Birthday(r[i++]);

        return d;        
    }

    async getUserBirthday(userId: string) : Promise<Birthday> {
        const r = await this.execute("SELECT * FROM bd WHERE uid=?", [userId]);
        const d = r[0];

        if (!d) return null;
        
        return new Birthday(d);
    }

    async getRoleToGive(messageId: string, reactionId: string) : Promise<RoleLink> {
        const r = await this.execute("SELECT * FROM ar_roles WHERE message_id=? AND emote_id=?", [messageId, reactionId]);
        const d = r[0];
        
        if (!d) return null;

        return new RoleLink(d);
    }

    async addRoleLink(messageId: string, reactionId: string, roleId: string) : Promise<RoleLink> {
        return null;
    }

    async addBirthday(userId: string, day: Number, month: Number, year: Number) {
        return null;
    }

}