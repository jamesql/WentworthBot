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
        return null;
    }

}