const Discord = require('discord.js');
const channel = '493482927649193994';
const pepole = ['282350776456839169','346629187504832513'];
const randomWords = ['Fuck Off ..','Dream, Dream ..','**Azoze** Is King ،، !','What you want?! ..','Dont Look at Me .!','Fuck You.','Hey Bitch!','Abode :v:','WHAT YOU NEED **BITCH**?! .','Hahahaha.. You are Funny.','Go out mother fuck!','Sleep With me \:('];
const prefix = {
    acc11: '11',
    acc12: '12',
    acc13: '13',
    acc14: '14',
    acc15: '15',
    acc16: '16',
    acc17: '17',
    acc18: '18',
    acc19: '19',
    acc20: '20'
};



const acc11 = new Discord.Client();
acc11.on('ready', () => {
    console.log('Account 11 Ready!');
    setInterval(() => {
        acc11.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 500);
    setInterval(() => {
       acc11.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc11.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc11 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc11.login(process.env.ACC11_TOKEN);



const acc12 = new Discord.Client();
acc12.on('ready', () => {
    console.log('Account 12 Ready!');
    setInterval(() => {
        acc12.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 500);
    setInterval(() => {
       acc12.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc12.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc12 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc12.login(process.env.ACC12_TOKEN);



const acc13 = new Discord.Client();
acc13.on('ready', () => {
    console.log('Account 13 Ready!');
    setInterval(() => {
        acc13.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 500);
    setInterval(() => {
       acc13.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc13.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc13 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc13.login(process.env.ACC13_TOKEN);



const acc14 = new Discord.Client();
acc14.on('ready', () => {
    console.log('Account 14 Ready!');
    setInterval(() => {
        acc14.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 500);
    setInterval(() => {
       acc14.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc14.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc14 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc14.login(process.env.ACC14_TOKEN);



const acc15 = new Discord.Client();
acc15.on('ready', () => {
    console.log('Account 15 Ready!');
    setInterval(() => {
        acc15.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 500);
    setInterval(() => {
       acc15.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc15.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc15 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc15.login(process.env.ACC15_TOKEN);



const acc16 = new Discord.Client();
acc16.on('ready', () => {
    console.log('Account 16 Ready!');
    setInterval(() => {
        acc16.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 500);
    setInterval(() => {
       acc16.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc16.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc16 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc16.login(process.env.ACC16_TOKEN);
