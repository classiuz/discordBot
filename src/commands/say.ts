import Command from "../structures/Command"
import { EmbedBuilder } from "discord.js"

export = new Command({
    name: 'say',
    description: 'Envía un mensaje con el Bot.',
    permissions: 'Admin',

    run(message, args, client) {
        const sayEmbed = new EmbedBuilder()
        sayEmbed.setTitle(args[1])
        sayEmbed.setDescription(args[2])
        sayEmbed.setAuthor({ name: args[3] })

        message.channel.send({ embeds: [sayEmbed] })
    }
});


// args.shift();
// let toSay = args.join(' ');
// if (!toSay) return message.reply('Es necesario escribir un mensaje.');
// message.delete();
// message.channel.send(toSay + '\n\n@everyone');