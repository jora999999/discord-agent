import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
})

client.on('ready', () => {
  console.log(`✅ Bot connecté comme ${client.user.tag}`)
})

client.on('messageCreate', async (message) => {
  if (message.author.bot) return
  if (!message.content.startsWith('/')) return

  await message.reply(`Tu as tapé : ${message.content} — l'IA arrive bientôt !`)
})

client.login(process.env.DISCORD_TOKEN)