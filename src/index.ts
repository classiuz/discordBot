console.clear()

import config from "./data/config.json"
import Client from "./structures/Client"

const client = new Client()

client.start(config.TOKEN)

client.on("ready", () => console.log(`- Indicom Bot it's ready!`))

client.on('messageCreate', (message): any => {
    if (!message.content.startsWith(config.prefix)) return
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = client.commands.find(cmd => cmd.name.toLocaleLowerCase() == args[0].toLowerCase() || cmd.alias.toLocaleLowerCase() === args[0].toLocaleLowerCase())
    if (!command) return message.reply(`El comando "${args[0]}" no existe. Si cree que esto es un error, contáctese con el administrador.`)

    if (!command.checkChannels(message)) return message.reply(`No puedes utilizar el comando "${command.name}" en este canal.`)
    if (!command.checkPermissions(message)) return message.reply(`No tienes los suficientes permisos como para ejecutar el comando "${command.name}".`)

    command.run(message, args, client)
})