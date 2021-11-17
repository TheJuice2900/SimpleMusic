module.exports = {
    name: 'restart',
    aliases: ['re'],
    category: 'Core',
    utilisation: '{prefix}restart',

    
    execute(client, message, args) {
        if (message.author.id !== '298666413470646283','236915849154265088','453934049174487051') {
            return message.channel.send(`**You cannot use this command!**`)
        }
    
        process.exit();
    }
};