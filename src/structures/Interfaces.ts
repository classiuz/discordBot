import { Client, Message } from "discord.js"

type permissions = 'Admin' | 'User' | 'Everyone'

export interface RunFunction {
    (
        message: Message,
        args: string[],
        client: Client
    ): any
}

export interface Options {
    name: string,
    description: string,
    permissions: permissions,
    run: RunFunction
}