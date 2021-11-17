module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - **<:asset1:862629105999544341> There is no music being played on this server !**`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - **<:asset1:862629105999544341> You are not connected in any voice channel !**`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - **<:asset1:862629105999544341> I am not able to join your voice channel, please check my permissions !**`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - <:asset1:862629105999544341> ${args[0].title} is not available in your country! Skipping...`);
            break;
        case 'MusicStarting':
            message.channel.send(`**<:asset1:862629105999544341> The music is starting... please wait and retry!**`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - **<:asset1:862629105999544341> Something went wrong ... Error :** ${error}`);
    };
};
