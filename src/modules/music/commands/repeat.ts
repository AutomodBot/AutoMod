import { Command } from '@lunabot/kaspar';
import type { Message, Client } from 'discord.js';

class Repeat extends Command {
    async run(client: Client, message: Message, args: string[]): Promise<void> {
        // Bail unless we're in a guild and a member ran this
        if (!message.guild || !message.member) return;
    }
}

export const repeat = new Repeat();
