module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - **<:asset1:862629105999544341> Music stopped as there is no more member in the voice channel !**`);
};