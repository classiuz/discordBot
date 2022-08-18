import { Client, Message } from "discord.js"

type permissions = 'Admin' | 'Mod' | 'User' | 'Everyone'

export interface RunFunction {
    (
        message: Message,
        args: string[],
        client: Client
    ): void
}

export interface Options {
    name: string,
    description: string,
    permissions: permissions[],
    run: RunFunction
}