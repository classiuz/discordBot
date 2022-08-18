import Command from "../structures/Command"

export = new Command({
    name: 'say',
    description: 'Envía un mensaje con el Bot.',
    permissions: ['Admin', 'Mod'],

    async run(message, args, client) {
        args.shift();
        let toSay = args.join(' ');
        if (!toSay) return message.reply('Es necesario escribir un mensaje.');
        await message.delete();
        message.channel.send(toSay);
    }
});