console.clear()

import config from "./data/config.json"
import Client from "./structures/Client"

const client = new Client()

client.start(config.TOKEN)

client.on("ready", () => console.log(`- Indicom Bot is ready!`))

client.on('messageCreate', (message): any => {
    if (!message.content.startsWith(config.prefix)) return
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = client.commands.find(cmd => cmd.name == args[0].toLowerCase())
    if (!command) return message.reply(`El comando "${args[0]}" no existe. Si cree que esto es un error, contáctese con el administrador.`)

    const permissions: ({ name: string, id: string } | undefined)[] = []
    command.permissions.forEach(cmdPms => permissions.push(config.permissions.find(pms => pms.name === cmdPms)))
    const hasPermissions = permissions.find(pms => message.member?.roles.cache.has(pms?.id!))
    if (!hasPermissions) return message.reply('No tienes los suficientes permisos como para ejecutar ese comando.')

    command.run(message, args, client)
})