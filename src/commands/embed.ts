import Command from "../structures/Command"
import { EmbedBuilder } from "discord.js"

export = new Command({
    name: 'embed',
    description: 'Envía un anuncio con el bot.',
    permissions: ['Admin'],

    run(message, args, client) {
        const sayEmbed = new EmbedBuilder()
        sayEmbed.setTitle(args[1])
        sayEmbed.setDescription(args[2])
        sayEmbed.setAuthor({ name: args[3] })

        message.channel.send({ embeds: [sayEmbed] })
    }
});