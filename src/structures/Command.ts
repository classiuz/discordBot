import { RunFunction, Options } from "./Interfaces"
import config from "../data/config.json"
import { Message } from "discord.js"

export default class Command {
    name: string
    alias: string
    description: string
    channels: string[]
    permissions: string[]
    run: RunFunction

    constructor(options: Options) {
        this.name = options.name
        this.alias = options.alias
        this.description = options.description
        this.channels = options.channels
        this.permissions = options.permissions
        this.run = options.run
    }

    checkChannels(message: Message) {
        const channels: ({ name: string, id: number } | undefined)[] = []
        this.channels.forEach(cmdCnl => channels.push(config.channels.find(cnl => cnl.name === cmdCnl)))
        return channels.find(cnl => cnl?.id === message.channel.type || cnl?.id === parseInt(message.channel.id))
    }

    checkPermissions(message: Message) {
        const permissions: ({ name: string, id: string } | undefined)[] = []
        this.permissions.forEach(cmdPms => permissions.push(config.permissions.find(pms => pms.name === cmdPms)))
        return permissions.find(pms => message.member?.roles.cache.has(pms?.id!))
    }
}