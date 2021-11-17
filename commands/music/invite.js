const disbut = require("discord-buttons");

let button = new disbut.MessageButton()
  .setLabel('Invite')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=839510974838865971&permissions=4155899729&scope=bot')
  .setStyle('url');

module.exports = {
    name: 'invite',
    aliases: ['i'],
    category: 'Music',
    utilisation: '{prefix}invite',

    execute(client, message) {
message.channel.send('_Click The Button To Invite Me!_', button)
    },
};