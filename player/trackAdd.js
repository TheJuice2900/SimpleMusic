module.exports = (client, message, queue, track) => {

    message.channel.send({
        embed: {
            color: 'PURPLE',
            author: { name: track.title },
            footer: { text: 'TGP MUSIC' },
            fields: [
                { name: 'Track Added To Queue', value: track.title , inline: false },

                { name: '-invite', value: 'Support The Bot By adding it!', inline: true },
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });
};


//message.channel.send(`${client.emotes.music} - ${track.title} has been added to the queue !`)
//message.channel.send(`${client.emotes.music} - ${track.title} **has been added to the queue !**`)