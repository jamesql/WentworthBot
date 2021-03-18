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

        Database.db = mysql.createConnection
    }

}