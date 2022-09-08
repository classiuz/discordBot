import Command from "../structures/Command"

export = new Command({
    name: 'Say',
    alias: 's',
    description: 'Envía un mensaje con el Bot.',
    channels: ['Custom'],
    permissions: ['Admin', 'Mod'],

    async run(message, args, client) {
        let toSay = args.join(' ');
        if (!toSay) return message.reply('Es necesario escribir un mensaje.');
        await message.delete();
        message.channel.send(toSay);
    }
});