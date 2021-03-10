import git from 'git-rev-sync';
import { Command } from '../../../command';
import type { Message, Client } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { colours } from '../../../utils';

class BotInfo implements Command {
    public name = 'bot-info';

    async run(client: Client, message: Message, args: string[]): Promise<void> {
        // Bail unless we're in a guild and a member ran this
        if (!message.guild || !message.member) return;

        // Get guild config
        const guildConfig = client.settings.get(message.guild.id)!;

        // Send info
        await message.channel.send(new MessageEmbed({
            description: `This is an open source Discord bot with a lot of features.\nUse \`${guildConfig.prefix}help\` to learn more.`,
            color: colours.DARK_BUT_NOT_BLACK,
            fields: [
                {
                    name: 'Process uptime',
                    value: `${Math.floor(process.uptime())}ms`,
                    inline: true
                },
                {
                    name: 'Bot latency',
                    value: `${Math.floor(message.createdTimestamp - new Date().getTime())}ms`,
                    inline: true
                },
                {
                    name: 'API latency',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Version',
                    value: `${git.short()}`,
                    inline: true
                },
                {
                    name: 'Creator',
                    value: `<@107834314439294976>`,
                    inline: false
                },
                {
                    name: 'Support us',
                    value: 'You can support us by staring our repo on [Github](https://github.com/automodbot/automod).',
                    inline: false
                }
            ],
            author: {
                name: 'Automod - Bot Info',
                icon_url: 'https://cdn.discordapp.com/attachments/794133875311771659/795540788226424842/auto_mod_logo_1.png'
            },
            footer: {
                text: `Message ID: ${message.id}`
            },
            timestamp: new Date(),
            thumbnail: {
                url: 'https://cdn.discordapp.com/attachments/794133875311771659/795540788226424842/auto_mod_logo_1.png'
            }
        }));
	}
};

export const botInfo = new BotInfo();