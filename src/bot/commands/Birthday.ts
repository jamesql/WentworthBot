import { Command, CommandMessage, Discord } from "@typeit/discord";
import config from "../../config";

@Discord(config.bot.prefix)
export abstract class Birthday {
    @Command("addBirthday")
    async test(command: CommandMessage) {
        command.reply("test");
    }
}