import { Client, Message } from "discord.js";

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
    permissions: string,
    run: RunFunction
}