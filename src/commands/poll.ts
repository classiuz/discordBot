import Command from "../structures/Command";

export = new Command({
    name: 'Poll',
    alias: 'p',
    description: 'Realiza una encuesta.',
    channels: ['Public'],
    permissions: ["Admin", "Mod"],

    async run(message, args, client) {
        args.shift()
        message.delete()
        const toPoll = await message.channel.send(args.join(' ') + ' @everyone')
        toPoll.react('❎')
        toPoll.react('✅')
    }
});