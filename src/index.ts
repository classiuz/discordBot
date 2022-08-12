console.clear();

import config from "./data/config.json"
import Client from "./structures/Client"

const client = new Client();

client.start(config.TOKEN);

client.on("ready", () => console.log(`- Indicom Bot is ready!`));

client.on('messageCreate', (message: any) => {
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = client.commands.find(f => f.name == args[0])
    if (!command) return message.reply(`El comando ingresado no existe. Si cree que esto es un error, contáctese con el administrador.`);

    const permissions = config.permissions.find(f => f.name === command.permissions)
    if (!message.member?.roles.cache.has(permissions?.id)) return message.reply('No tienes los suficientes permisos como para ejecutar ese comando.');

    command.run(message, args, client);
});