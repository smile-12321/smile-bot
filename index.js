const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log("Smile bot online 😄");
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    // send message
    if (message.content.startsWith("!send")) {
        const text = message.content.slice(6);
        message.channel.send(text);
    }

    // clear messages
    if (message.content.startsWith("!clear")) {
        const args = message.content.split(" ");
        const amount = parseInt(args[1]);

        if (!amount) return message.reply("Kitne messages delete karne hain?");

        await message.channel.bulkDelete(amount);
        message.channel.send("Messages clear ho gaye 😄");
    }
});

client.login("MTUxMjg0MzUzMzA4MDU5MjM4NA.GunhDO.ET7IHfOUGcXKAdTS6WAwxyliG_h0Flf-qd4THY");