const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا

client.on("message", message => {

  if (message.content.startsWith(prefix + "bc")) {
               if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
m.send(${argresult}\n ${m});
})
message.channel.send(${message.guild.members.filter(m => m.presence.status !== 'all').size}: عدد الاعضاء المستلمين); 
message.delete(); 
};
})

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by DG');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(`DG-Welcome`,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`DG-Welcome`,'https://www.twitch.tv/v5bz');
});
