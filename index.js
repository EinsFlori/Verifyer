const Dlang = require('discordbot-script');
const bot = new Dlang({
token: "TOKEN",
prefix: ["$getServerVar[prefix]"]

})
bot.Variables({
    code: "0",
    prefix: ".",
    veryrol: "0",
    vote: "0",
    myvotes: "0",
    userid: "0",
    botv: "0",
    money: "0",
    os: "no",
    log: "0"
})

bot.Status({
    0: {
        description: ".help For more Infomation",
        type: "PLAYING"
    },
    1: {
        description: "v2 soon",
        type: "WATCHING"
    },
    2: {
        description: "I am on $guildCount servers",
        type: "WATCHING"
    }
}, 13000)


bot.MessageEvent()

bot.Command({
name: "ping",
code: `
Bot ping: $ping
DataBase ping: $dbPing
`
})


bot.Command({
    name: "code",
    code: `
$title[Verify]
$description[$dm Your Verify code has been created, Your Verify code is: $getUserVar[code]]
$color[GREEN]
$setUserVar[code;$random[1000;5000]]
$deletecommand
`
})


bot.Command({
    name: "very",
    code: `
$deleteIn[5s]
$deletecommand
$giveRole[$authorID;$getServerVar[veryrol]]
$title[Verify]
$description[You have been successfully verified!]
$color[GREEN]
$addTimestamp
$onlyIf[$message[]!=;Something went wrong. Try again once.]
$onlyIf[$roleExists[$getServerVar[veryrol]]==true;The Verify role has not been set yet!]
$onlyIfMessageContains[$getUserVar[code];You have been ***NOT*** Verified! Please use a real verify code!]
`
})


bot.Command({
    name: "setveryrol",
    code: `
$setServerVar[veryrol;$message[]]
$awaitMessages[ok;everyone;3s;$title[Setup]
$description[The very group was successfully changed!]
$color[GREEN]]
$addTimestamp
$onlyAdmin[Only admins can set the verification role]
`
})


bot.Command({
    name: "clear",
    code: `
$clear[$message[]]
$title[Mod]
$description[It has been deleted $message[] after!]
$color[GREEN]
$onlyIf[$message[]!=;Please enter a message number to be deleted.]
$onlyIf[$message[]!=0;Please enter a message number to be deleted.]
$onlyIfMessageContains[1;Please enter a message number to be deleted.]
$addTimestamp
  `
})


bot.Command({
    name: "mycode",
    code: `
$title[Verify]
$description[Your Verify code is: $getUserVar[code]]
$color[GREEN]
$addTimestamp
  `
})


bot.Command({
    name: "eval",
    code: `
$djsEval[$message[]]
$onlyIf[$message[]!=;Specify Node.js code for eval]
$addTimestamp
$log[$username[$authorID] Hat eval genutzt]
$onlyForUsers[544541234937462795;346952827970781185;No]
`
})


bot.Command({
    name: "ban",
    code: `
$ban[$mentioned[1]]
$onlyIf[$mentioned[1]!=;Specify a user to ban!]
$onlyPerms[ban; You have no rights to this command!]
$title[Ban]
$description[The user $message[] was banned!]
$color[GREEN]
$addTimestamp
`
})


bot.Command({
    name: "kick",
    code: `
$kick[$mentioned[1]]
$onlyIf[$mentioned[1]!=;Specify a user to kick!]
$onlyPerms[ban; You have no rights to this command!]
$title[Ban]
$description[The user $message[] was kicked!]
$color[GREEN]
$addTimestamp
`
})


bot.Command({
    name: "help",
    aliases: "h",
    code: `
$title[Help]

$description[Prefix: $getServerVar[prefix]]
$addField[Moderation;
- ban
- kick
- sendembed (example: .sendembed title message color)
- sendinvite (Send the developer the server invite of your server for better support, I recommend you to send an endless invite!);yes]

$addField[Verify(Non Commands);
- Code Generate
- Verify;yes]

$addField[Setup;
- setveryrol : Set the verification role.
- setprefix (Change the prefix. Only for your server!)
- setlog (Set the log channel);yes]

$addField[Users;
- file-create : Create a custom file
- botinfo
- invite
- tutorial (send the tutorial)
- vote (unofficial)
- vote-list
- my-vote (See you votes);yes]

$addField[Economy;
- work
- deep
- money
- top-money
- spin;yes]

$footer[More commands soon!!!]
$color[BLUE]
$addTimestamp
`
})


bot.Command({
    name: "file-create",
    code: `
$title[File System]
$description[Your file was created.]
$color[GREEN]
$addTimestamp
$createFile[$message[];$authorID;txt;$channelID[]]
$onlyIf[$message[]!=;You must specify a text to create a file!]
`
})


bot.Command({
    name: "info",
    code: `
$title[Infos]
$description[]
$addField[Very group;
The Very group is: $getServerVar[veryrol];yes]
$color[BLUE]
$addTimestamp
`
})


bot.Command({
    name: "invite",
    aliases: "i",
    code: `
$title[Invite]
$description[Invite me: https://discord.com/api/oauth2/authorize?client_id=605689487888220180&permissions=8&scope=bot]
$color[BLUE]
$addTimestamp
`
})


bot.Command({
    name: "botinfo",
    aliases: "bi",
    code: `
$title[Bot Infomation]
$description[Hey, I am Verifyer. I am a Discord bot, my developer is from Germany. I have many functions for example
.file-create, with this command you can let the bot create a custom txt file with your own text. With .help you can see all my commands.]
$addField[The bot's uptime is;$uptime]
$addField[My Commands.;$commandCount]
$addField[Vote for me;{hyper:Vote for Me:https://top.gg/bot/605689487888220180}]
$addField[Support;{hyper:Support Server:https://discord.gg/kAg7bfs7X5}]
$addField[Version;This bot is on DB-Script version: $packageVersion]
$addField[Bot Version;$getVar[botv]]
$addField[Registry users;$allMembersCount]
$color[BLUE]
$addTimestamp
`
})


bot.Command({
    name: "sendembed",
    code: `
$onlyAdmin[N]
$title[$message[1]]
$description[$message[2]]
$color[$message[3]]
$addTimestamp
$deletecommand[1ms]
$onlyIf[$message[]!=;Use: .send embed title text color]
`
})


bot.Command({
    name: "tutorial",
    code: `
$title[Tutorial]
$description[Use the command .code to get a verification code which you can redeem with .very. You will receive the code via private mail.]
$color[GREEN]
`
})


bot.Command({
name: "tac",
code: `
$onlyForUsers[544541234937462795;346952827970781185]
$tempActivity[$message[]]
$onlyIf[$message[]!=;Specify a Message!]
$addTimestamp
$log[$username[$authorID] Hat temp ac genutzt]
`
})


bot.Command({
    name: "vote",
    code: `
$title[Vote]
$description[Thank you for voting. But remember that this is not a real vote, but only an info for the developer. :D]
$color[GREEN]
$setVar[vote;$sum[$getVar[vote];1]]
$setVar[myvotes;$sum[$getVar[myvotes];1;$authorID]]
$commandCooldown[24h;You have already voted today come in {time} again.]
`
})


bot.Command({
    name: "vote-list",
    code: `
$title[Vote]
$description[There have up to $getVar[vote] people voted for the bot!]
$color[GREEN]
`
})


bot.Command({
    name: "my-vote",
    code: `
$title[Vote]
$description[You have voted $getVar[myvotes;$authorID] times so far!]
$color[GREEN]
`
})


bot.Command({
    name: "setprefix",
    code: `
$setServerVar[prefix;$message[]]
$awaitMessages[ok;everyone;3s;$title[Setup]
$description[The prefix was successfully changed!]
$color[GREEN]]
$addTimestamp
$onlyAdmin[Only admins can set the prefix]
`
})


bot.Command({
    name: "sendinvite",
    code: `
$onlyAdmin[Only the server owner can send the server invite to the developer!]
$description[Dir wurde eiene server invite gesendet $message[]]
$color[GREEN]
$addTimestamp
$dm[544541234937462795]
$guildCooldown[100000000000000000000000000000h;You can only submit this server invite once!]
$onlyAdmin[Only the server owner can send the server invite to the developer!]
`
})


bot.Command({
name: "vars",
code: `
$onlyForUsers[544541234937462795;346952827970781185;no]
$allVars
$onlyForUsers[544541234937462795;346952827970781185;no]
`
})


bot.Command({
    name: "setv",
    code: `
$onlyForUsers[544541234937462795;346952827970781185]
$dm
$awaitMessages[ok;everyone;3s;$title[Bot Version]
$description[Du hast die bot version auf $getVar[botv] geändert!]
$color[GREEN]]
$setVar[botv;$message[]]
$onlyForUsers[544541234937462795;346952827970781185;no]
$addTimestamp
`
})


bot.Command({
    name: "luca",
    code: `
Luca is kaka
`
})


bot.Command({
    name: "work",
    code: `
$title[Economy]
$description[$randomText[You helped an old woman cross the street and got $$random[1;50] from her;You have washed a car and got $random[1;50]$]]
$color[GREEN]
$setUserVar[money;$sum[$getUserVar[money];$random[1;50]]]
$cooldown[20m;You can only work every 20 minutes. Remaining time: {time}!]
`
})


bot.Command({
    name: "money",
    code: `
$title[Economy]
$description[You have $getUserVar[money]$]
$color[GREEN]
`
})


bot.Command({
    name: "money-reset",
    code: `
$onlyAdmin[Only the server owner can reset the Money!]
$resetUserVar[money]
$title[Economy]
$description[You have reset $getUserVar[money]$]
$onlyAdmin[Only the server owner can reset the Money!]
$color[RED]
`
})


bot.Command({
    name: "top-money",
    code: `
$title[Economy]
$description[$userLeaderboard[money;asc]]
$color[GREEN]
`
})


bot.Command({
    name: "deep",
    code: `
$title[Economy]
$description[$randomText[You stole an old woman's bag and found $random[1;500]$;You robbed a bank and got $random[1;500]$]]
$color[BLACK]
$setUserVar[money;$sum[$getUserVar[money];$random[1;500]]]
$cooldown[1h;You can only Stealing every 1 Hour. Remaining time: {time}!]
`
})


bot.Command({
name: "stop",
code: `
$onlyForUsers[544541234937462795;346952827970781185;no]
$stop
$onlyForUsers[544541234937462795;346952827970781185;no]
`
})


bot.Command({
    name: "spin",
    code: `
$title[Economy]
$description[$randomText[PING PING PING PING You have won $$random[1;10000]   :tada: :tada: :tada: ]]
$color[PURPLE]
$setUserVar[money;$sum[$getUserVar[money];$random[1;1000]]]
$cooldown[24h;You can spin the wheel of fortune every 24 hours.Remaining time: {time}!]
`
})


bot.Command({
name: "guilds",
code: `
$guildNames
$onlyForUsers[544541234937462795;346952827970781185;no]
`
})


bot.Command({
     name: "setlog",
    code: `
    $setServerVar[log;$message[]]
    $onlyAdmin[Only admins can set the Log channel]
        `
        })


            const fs = require('fs') 
            const events = fs.readdirSync("./events/");
            for (const Files of events) {
                const eventFile = fs.readdirSync(`./events/${Files}/`).filter(file => file.endsWith(".js"))
                for (const event of eventFile) {
                    const obj = require(`./events/${Files}/${event}`);
                    if (typeof(obj) != "object") {
                    console.log("invalid module.exports data ...shutting down");
                    process.exit();
            }
                    const eventName = Object.keys(obj);
                    const eventData = Object.values(obj)[0];
                    if (typeof(eventData) != "object") {
                        if (typeof(eventData) != "number") {
                            console.log("invalid event data ...shutting down");
                            process.exit();
                         }
                    }
                    bot[eventName](eventData);
                    if(bot.vars){
                        bot.Variables(eventData);
                    } if(bot.awaitedCommands){
                        bot.AwaitedCommand(eventData);
                    }
            
                    console.log(`Loaded Event: ${event}`);
                }
            }
            bot.onBan();
            bot.onUnban();
            bot.onBotJoin();
            bot.onBotLeave();
            bot.onChannelCreate();
            bot.onChannelDelete();
            bot.onEmojiCreate();
            bot.onEmojiDelete(),
            bot.onGuildUpdate();
            bot.onJoined();
            bot.onLeave();
            bot.onMessageDelete();
            bot.onRateLimit();
            bot.onRoleCreate();
            bot.onRoleDelete();
            bot.onUserUpdate();
