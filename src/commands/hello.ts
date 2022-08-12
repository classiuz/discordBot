import Command from "../structures/Command";

export = new Command({
    name: 'hello',
    description: 'Say Hello',
    permissions: 'Everyone',

    run(message, args, client) {
        message.reply('Hello!');    
    },
})