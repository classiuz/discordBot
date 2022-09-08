import { Client, Message } from "discord.js"

type channels = 'Public' | 'DM' | 'Custom'
type permissions = 'Admin' | 'Mod' | 'User' | 'Everyone'

export interface RunFunction {
    (
        message: Message,
        args: string[],
        client: Client
    ): void
}

export interface Options {
    name: string
    alias: string
    description: string
    channels: channels[]
    permissions: permissions[]
    run: RunFunction
}