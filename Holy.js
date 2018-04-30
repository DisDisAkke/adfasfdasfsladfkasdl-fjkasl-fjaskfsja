const Discord = require("discord.js");
const economy = require('discord-eco')
const db = require('quick.db')
const TOKEN = "NDQwMTU2NjIyOTA4NTU1MjY0.Dcfi1Q.Sc-IXt7NYrtfKe3JKpxlb77kdyY"

var bot = new Discord.Client();
var prefix = 'p!'



    const sleepy = bot.emojis.find("name", "sleepy")
    const MoonNut = bot.emojis.find("name", "MoonNut")


    function shootresponse() {
        var rand = ['2', '3', '4', '5', '6', '6'];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }

    function headsortails() {
        var rand = [`${sleepy} | **${message.author.username}** tossed a emoji and it landed on **Sleepy!**`, `${sleepy} | **${message.author.username}** tossed a emoji and it landed on **MoonNut!** ${MoonNut}`, ];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }

    function dicenum() {
        var rand = ['1', '2', '3', '4', '5', '6', '1', '2', '3', '4', '5', '6'];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }

function ballchoice() {
    var rand = ['It is certain', 'It is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.', 'It is certain', 'It is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

    return rand[Math.floor(Math.random()*rand.length)];
}

    var storeballchoice = `${ballchoice()}`

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == ('Hi')) {
        message.channel.sendMessage("Hi, there!");
    }

    if (message.content == ('hi')) {
        message.channel.sendMessage("Hi, there!");
    }



    if (message.content.includes('Fuck')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.startsWith(prefix + 'eval')) {
        if (message.author.id !== '146944503092084736') return console.log(`Access Denied to command eval.\nUser: ${message.author.tag}\nID: ${message.author.id}\nReason: User is not bot owner.`)

        message.delete();

        if (!args[0]) return;

        try {
            var code = args.join(' ');
            var evaled = eval(code);
        
            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
        
                var evalembed = new Discord.RichEmbed()
                .setDescription(`:inbox_tray: **Input:**\n\`\`\`css\n${code}\`\`\`\n\n:outbox_tray: **Output:** \`\`\`css\n${clean(evaled)}\`\`\``)
                .setColor(0x52c357)
        
                message.channel.send(evalembed).then(m => m.delete(50000));
            } catch(err) {
        
                var errembed = new Discord.RichEmbed()
                .setDescription(`:inbox_tray: **Input:**\n\`\`\`css\n${code}\`\`\`\n\n:x: \`ERROR\` \`\`\`css\n${clean(err)}\n\`\`\``)
                .setColor(0xff0000)
        
                message.channel.send(errembed).then(m => m.delete(50000));
            } 
    }

   

    if (message.content.includes('fuck')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('nigger')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('nigga')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('idiot')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('jackass')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }


    if (message.content.includes('stupid')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('Fatass')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.startsWith(prefix + 'PURGE')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Lets delete the command message, so it doesnt interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", "Crystal League")) { // This checks to see if they DONT have it, the "!" inverts the true/false // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('You need the \`bot-commander\` role to use this command.'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }

    if (message.content.includes('ass')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('chick')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('Ass')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('Ass')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }


    if (message.content.includes('penis')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('Penis')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('Fuсk')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('hoe')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }


    if (message.content.includes('dick')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('pussy')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('twat')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('Stupidass')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.includes('Damn')) {
        message.delete()
        message.channel.sendMessage('Do not say that!')
        message.delete()
    }

    if (message.content.startsWith(prefix + 'avatar')) {
    function generateHex() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    var defineduser = '';

    if (args2[0]) {
    defineduser = message.author;
    }
    if (args2[0]) {
    defineduser = message.mentions.users.first();
    }

    var avatarembed = new Discord.RichEmbed()
    .setURL(`${defineduser.avatarURL}`)
    .setTitle(`${defineduser.username}'s Avatar`)
    .setImage(`${defineduser.avatarURL}`)
    .setColor(generateHex())

    message.channel.send(avatarembed);
    }


	if (message.content.startsWith(prefix + 'shoot')) {
		message.channel.sendMessage(`I killed ${shootresponse()} zombies in \`${Date.now() - message.createdTimestamp} ms\``);
	} else

    if (message.content.startsWith(prefix + 'warn')) {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let generallog = client.channels.find('name', 'general');
    if (!generallog) return message.reply('I cannot find a general channel');
    if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
    const embed = new Discord.RichEmbed()
    .setTimestamp()
    .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
    return client.channels.get(general.id).send({embed});
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

    if (message.content.startsWith(prefix + 'emoteflip')) {
    var coinflipembed = new Discord.RichEmbed()
    .setTitle("Coinflip!")
    .setColor(0x8be0fd)
    .setDescription(`${headsortails()}`)

    message.channel.send(coinflipembed);
}
    
if (message.content == 'yes') {
    message.react("👍")
}

if (message.content.startsWith(prefix + 'dice')) {
    message.channel.sendMessage(` :game_die: you rolled a **${dicenum()}!** :game_die:`)
   
           }


if (message.content == 'p!info') {
    message.channel.sendMessage('This server was made by PVZHD, Go subscribe to his channel, and this bot was made by Random and PVZHD :smile:')
    message.react("👍")
}

    if (message.content == 'h') 
    message.channel.send("h xD")
    .then(function (message) {
  message.react("🇭")
        });

});

bot.login(TOKEN);
