module.exports = (client, message, track) => {
    message.channel.send({
        embed: {
            color: 'PURPLE',
            author: { name: track.title },
            footer: { text: 'TGP MUSIC' },
            fields: [
                { name: 'AUTHOR', value: track.author, inline: true },
                { name: 'Requested by', value: track.requestedBy.username, inline: true },

                { name: 'Duration', value: track.duration, inline: true },
                { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });
};

