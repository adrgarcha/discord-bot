require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');
function choose(){ // devuelve, de unos argumentos, uno al azar. como el random, pero elige uno de los argumentos
	var index=floor(Math.random()*(arguments.length-1))};
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`🚬 ${c.user.tag} esta fumando.`);
});
var arr;
client.on('messageCreate', (message) => {
    if(message.author.bot){
        return;
    }

    if(message.content === 'iyow'){
        message.reply('ke paza iyow');
    }

    if(message.content.includes('sale evento')){
        message.reply('el de mis huevos al viento');
    }

    if(message.content === ('!frasejoker')){
        arr = ['quien madruga se encuentra con todo cerrado😔🤙',
                    'para mi el locomotor es solo motor🥵😫',
                    'el tiempo sin ti es empo🙏🤟',
                    'a veces me siento 🪑🤯'];
        message.reply(arr[Math.floor(Math.random()*arr.length)]);
    }

    if(message.content.includes('!frasejoker add')){
        var arr2 = message.content.split(' ').shift().shift();
        var str = arr2.join(' ');
        arr.push(str);
    }
});


client.login(process.env.DISCORD_TOKEN);
