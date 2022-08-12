import Command from "../structures/Command";

export = new Command({
    name: 'clear',
    description: 'Elimina una cantidad especificada de mensajes.',
    permissions: 'Admin',

    async run(message, args, client) {
        const amount = args[1];
        if (!amount || Number.isNaN(Number(amount))) return message.reply(`${amount == undefined ? 'Es necesario colocar un número de mensajes a eliminar.' : `"${amount}" no es un número, es necesario un número.`}`);
    
        const amountParsed = parseInt(amount);
        if (message) await message.delete();
        // @ts-ignore
        message.channel.bulkDelete(amountParsed);
        const info = await message.channel.send(`${message.author} Se han eliminado ${amountParsed} mensajes en total.`);
        setTimeout(() => info.delete(), 5000);
    }
});