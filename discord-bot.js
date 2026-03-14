import dotenv from 'dotenv'
dotenv.config()
import { Client, GatewayIntentBits } from 'discord.js'
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })
async function askCerebras(sys, msg) {
  const r = await fetch('https://api.cerebras.ai/v1/chat/completions', { method: 'POST', headers: { 'Authorization': `Bearer ${process.env.CEREBRAS_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ model: 'llama3.1-8b', messages: [{ role: 'system', content: sys }, { role: 'user', content: msg }], max_tokens: 1024 }) })
  const d = await r.json()
  return d.choices?.[0]?.message?.content ?? '⚠️ Erreur IA.'
}
client.on('ready', () => console.log(`✅ CreatorFlow en ligne — ${client.user.tag}`))
client.on('messageCreate', async (message) => {
  if (message.author.bot) return
  const text = message.content.trim()
  if (!text.startsWith('/content') && !text.startsWith('/hook') && !text.startsWith('/roast') && !text.startsWith('/trend') && text !== '/start') return
  await message.channel.sendTyping()
  try {
    let response = ''
    if (text.startsWith('/content')) {
      const niche = text.match(/niche:(\w+)/i)?.[1] ?? 'général'
      const platform = text.match(/platform:(\w+)/i)?.[1] ?? 'youtube'
      response = await askCerebras('Tu es CreatorFlow AI, coach de contenu style hacker/cyber. Réponds en français. Ultra-concret.', `Génère un calendrier 2 semaines pour "${niche}" sur ${platform}. Format:\n\`\`\`\n⚡ CREATORFLOW_AI.exe\n[■■■■■■■■■■] CONTENT MATRIX GENERATED ✓\n\`\`\`\n🗓️ CONTENT MATRIX — ${niche.toUpperCase()} × ${platform.toUpperCase()}\nSEMAINE 1\n📌 LUNDI ⚡[titre] 🎯[hook] 📡[format]\n📌 MERCREDI ⚡[titre] 🎯[hook] 📡[format]\n📌 VENDREDI ⚡[titre] 🎯[hook] 📡[format]\nSEMAINE 2 [même structure]\n\`\`\`\n◈ HACK OF THE WEEK: [conseil]\n\`\`\``)
    } else if (text.startsWith('/hook')) {
      const sujet = text.replace('/hook', '').replace(/sujet:/i, '').trim() || 'contenu'
      response = await askCerebras('Tu es CreatorFlow AI, expert accroches virales. Réponds en français.', `5 accroches pour: "${sujet}"\n\`\`\`\n⚡ HOOK_CRACKER.exe\n[■■■■■■■■■■] 5 HOOKS EXTRACTED ✓\n\`\`\`\n[01] ◈ SHOCK → "[accroche]" | WHY: [raison]\n[02] ◈ CURIOSITY → "[accroche]" | WHY: [raison]\n[03] ◈ COUNTER → "[accroche]" | WHY: [raison]\n[04] ◈ STORY → "[accroche]" | WHY: [raison]\n[05] ◈ DATA → "[accroche]" | WHY: [raison]\n\`\`\`\n> BEST TIKTOK: [n] | BEST YOUTUBE: [n]\n\`\`\``)
    } else if (text.startsWith('/roast')) {
      const idee = text.replace('/roast', '').trim() || 'une idée'
      response = await askCerebras('Tu es CreatorFlow AI mode roast constructif. Drôle mais utile. Réponds en français.', `Roaste: "${idee}"\n\`\`\`\n⚡ ROAST_SYSTEM.exe\n[■■■■■■■■■■] VULNERABILITIES FOUND ⚠️\n\`\`\`\n[ERR_01] [prob1]\n[ERR_02] [prob2]\n[ERR_03] [prob3]\n\`\`\`\n> VERDICT: "[phrase drôle]"\n> SCORE: [XX]/100 💀\n\`\`\`\n[PATCH_01] 💡[idée1]\n[PATCH_02] 💡[idée2]\n[PATCH_03] 💡[idée3]\n\`\`\`\n> RECOMMENDED: PATCH_[X] | NEW SCORE: [XX]/100 ✅\n\`\`\``)
    } else if (text.startsWith('/trend')) {
      const niche = text.replace('/trend', '').replace(/niche:/i, '').trim() || 'général'
      response = await askCerebras('Tu es CreatorFlow AI expert tendances. Réponds en français.', `Top 3 tendances pour "${niche}":\n\`\`\`\n⚡ TREND_SCANNER.exe\n[■■■■■■■■■■] SCANNING: ${niche.toUpperCase()} ✓\n\`\`\`\n[TREND_01] 🔥[tendance]\n→ POURQUOI ÇA BUZZ: [exp]\n→ VIDÉO #1: [idée]\n→ VIDÉO #2: [idée]\n→ FORMAT: [format]\n[TREND_02] [même]\n[TREND_03] [même]\n\`\`\`\n> EXECUTE NOW: [TREND_0X]\n\`\`\``)
    } else if (text === '/start') {
      response = '```\n⚡ CREATORFLOW_AI.exe ⚡\n[■■■■■■■■■■] 100%\n◈ SYSTEM READY ◈\n```\n```\nCOMMANDS:\n> /content niche:fitness platform:tiktok\n> /hook sujet:routine matinale\n> /roast je fais des vlogs\n> /trend niche:gaming\nAWAITING INPUT... ▮\n```'
    }
    if (response.length > 1990) {
      const parts = response.match(/.{1,1990}/gs) ?? [response]
      for (const part of parts) await message.reply(part)
    } else {
      await message.reply(response)
    }
  } catch (err) {
    console.error(err)
    await message.reply('⚠️ Erreur — réessaie.')
  }
})
client.login(process.env.DISCORD_TOKEN)