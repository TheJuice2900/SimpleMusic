module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - **<:asset1:862629105999544341> No results found on YouTube for** ${query} !`);
};