import Command from "../structures/Command"

export = new Command({
    name: 'Hello',
    alias: 'hi',
    description: 'Say Hello',
    channels: ['Public', 'DM'],
    permissions: ['Everyone'],

    run(message, args, client) {
        message.reply('Hello!');
    },
})