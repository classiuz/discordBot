console.clear();

import config from './data/config.json';
import Client from './structures/Client';

const client = new Client();

client.start(config.token);

client.on("ready", () => console.log(`- Indicom Bot is ready!`));

client.on('messageCreate', message => {
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = client.commands.find(f => f.name == args[0]);
    if (!command) return;

    command.run(message, args, client);
});