import Command from "../structures/Command"

export = new Command({
    name: 'Clear',
    alias: 'c',
    description: 'Elimina una cantidad especificada de mensajes.',
    channels: ['Public'],
    permissions: ['Admin', 'Mod'],

    async run(message, args, client) {
        const amount = args[1];
        if (!amount || Number.isNaN(Number(amount))) return message.reply(`${amount == undefined ? 'Es necesario colocar un número de mensajes a eliminar.' : `"${amount}" no es un número, es necesario un número.`}`)

        const amountParsed = parseInt(amount)
        if (amountParsed >= 100) return message.reply('La cantidad de mensajes a eliminar no puede ser igual o mayor que 100.')
        if (message.channel.type == 1) return
        message.channel.bulkDelete(amountParsed + 1)
        const info = await message.channel.send(`${message.author} Se han eliminado ${amountParsed} mensajes en total.`)
        setTimeout(() => info.delete(), 4500)
    }
})