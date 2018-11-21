const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "top";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "499213116941533184"; // ايدي السررفر
var channel = "502827265281884161";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**top ♥ ,top , top , top , top , top , top , top , top , top ,top ,top , top **')
    },305);
})
client.on('ready', async() => {
var server = "499213116941533184"; // ايدي السررفر
var channel = "502827265281884161";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , Welcome Back , **')
    },610);
})
client.on('ready', async() => {
var server = "499213116941533184"; // ايدي السررفر
var channel = "502827265281884161";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , -Mal , Shop , **')
    },915);
})
client.on('ready', async() => {
var server = "499213116941533184"; // ايدي السررفر
var channel = "502827265281884161";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** »Top ♥ Top♥ , Welcome ,  »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome , »Top ♥ Top♥ , Welcome ,  **')
    },1220);
})






////////////////
client.on('ready', async() => {
var server = "499213116941533184"; // ايدي السررفر
var channel = "502827265281884161";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

client.on('ready', async() => {
var server = "499213116941533184"; // ايدي السررفر
var channel = "502827265281884161";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#rep <@411137717884289024>')
    },8.64e+7);
})






client.on('message', message => {
if(message.content.startsWith('1s')) {
if(message.author.id !== "411137717884289024") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 



client.on('message', message => {
	if(message.content === '1'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
	if(message.content === '2'){
        message.channel.send('#credit')
    }
});

client.on('message', message => {
	if(message.content === '3'){
        message.channel.send('#rep <@411137717884289024>')
    }
});

client.on('message', message => {
     if(message.content === '4'){
        message.member.voiceChannel.join();
    }
});









client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.on('ready', () => {
  client.user.setGame(`»TOP .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log('Desert Bot Is Online')
  console.log('---------------')
});







const adminprefix = "-";
const devs = ['411137717884289024'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setN')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});
 
client.login(process.env.BOT_TOKEN);
