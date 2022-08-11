import { Client, Message } from "discord.js";

type runFunction = (message: Message, args: string[], client: Client) => any;
type options = { name: string, description: string, run: runFunction }

class Command {
    name: string;
    description: string;
    run: runFunction;

    constructor(options: options) {
        this.name = options.name;
        this.description = options.description;
        this.run = options.run;
    };
};

export default Command;