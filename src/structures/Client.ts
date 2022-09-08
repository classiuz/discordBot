import { Client as discordClient, Collection, IntentsBitField } from "discord.js"
import Command from "./Command"
import fs from "fs"

const intents = new IntentsBitField(37379)

export default class Client extends discordClient {
    commands: Collection<string, Command>

    constructor() {
        super({ intents })

        this.commands = new Collection()
    }

    start(token: string) {
        fs.readdirSync('./dist/commands').filter(file => file.endsWith(".js")).forEach(file => {
            const command: Command = require(`../commands/${file}`)
            console.log(`The Command "${command.name}" has been loaded.`)
            this.commands.set(command.name, command)
        });

        this.login(token)
    }
}