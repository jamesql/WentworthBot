import { Command, CommandMessage, Discord } from "@typeit/discord";

@Discord("!")
export abstract class Test {
    @Command("Test")
    async test(command: CommandMessage) {
        command.reply("test");
    }
}