import { Client } from "@typeit/discord";
import path from "path";
import config from "../config";

export class Bot {

    private static _client: Client;

    static get Client(): Client {
        return this._client;
    }

    static start() {
        this._client = new Client();

        this._client.login(
            config.bot.token,
            `C:\\Users\\bobvm\\Documents\\fs\\WentworthBot\\src\\bot\\commands\\*.ts`
        );
        console.log(`[WITBOT] Started discord api...`);
        console.log(Client.getCommands());
    }

}

// Bot.start();