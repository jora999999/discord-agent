import * as sdk from '@botpress/sdk'

const BOOT_SEQUENCE = `
\`\`\`
⚡ CREATORFLOW_AI.exe ⚡
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█  SYSTEM ONLINE     █
█  VERSION 1.0.0     █
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
[■■■■■■■■■■] 100%
◈ NEURAL NETWORK LOADED ◈
\`\`\`
`

export default new sdk.Conversation({
  handler: async ({ message, client }) => {
    const text = message.payload.text?.trim() ?? ''

    if (text.startsWith('/content')) {
      const niche    = text.match(/niche:(\w+)/i)?.[1]    ?? 'général'
      const platform = text.match(/platform:(\w+)/i)?.[1] ?? 'youtube'

      const prompt = `
Tu es CreatorFlow AI, une IA ultra-puissante style hacker/cyber.
Niche : "${niche}" | Plateforme : ${platform}

Commence ta réponse EXACTEMENT comme ça :

\`\`\`
⚡ CREATORFLOW_AI.exe
[■■■■■■■■■■] SCANNING NICHE: ${niche.toUpperCase()}...
◈ PLATFORM TARGET: ${platform.toUpperCase()} ◈
> CONTENT MATRIX GENERATED ✓
\`\`\`

Puis génère :

🗓️ CONTENT MATRIX — ${niche.toUpperCase()} × ${platform.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━

SEMAINE 1 — INITIALIZING...
━━━━━━━━━━━━━━━━━
📌 [LUNDI]
  ⚡ TITRE : [titre accrocheur ultra-spécifique]
  🎯 HOOK  : [première phrase qui arrête le scroll]
  📡 FORMAT: [Short 60s / Reel / Long-form]

📌 [MERCREDI]
  ⚡ TITRE : [titre accrocheur]
  🎯 HOOK  : [accroche]
  📡 FORMAT: [format]

📌 [VENDREDI]
  ⚡ TITRE : [titre accrocheur]
  🎯 HOOK  : [accroche]
  📡 FORMAT: [format]

SEMAINE 2 — LOADING...
━━━━━━━━━━━━━━━━━
[même structure que semaine 1]

\`\`\`
◈ HACK OF THE WEEK ◈
> ${niche.toUpperCase()} EXPLOIT: [conseil ultra-spécifique]
> ESTIMATED REACH BOOST: +[X]%
\`\`\`

Réponds en français. Ultra-concret, jamais générique.`

      await client.createMessage({
        conversationId: message.conversationId,
        userId: message.userId,
        payload: { text: prompt }
      })
      return
    }

    if (text.startsWith('/hook')) {
      const sujet = text.replace('/hook', '').replace(/sujet:/i, '').trim() || 'contenu général'

      const prompt = `
Tu es CreatorFlow AI en mode hook cracker.
Sujet : "${sujet}"

Commence EXACTEMENT comme ça :

\`\`\`
⚡ HOOK_CRACKER.exe
[■■■■■■■■■■] ANALYZING: "${sujet}"
> 5 VIRAL HOOKS EXTRACTED ✓
\`\`\`

Puis génère :

🔥 HOOK DATABASE — "${sujet}"
━━━━━━━━━━━━━━━━━━━━━━━━━━

[01] ◈ SHOCK PROTOCOL
"[accroche choc]"
→ WHY IT WORKS: [explication courte]

[02] ◈ CURIOSITY EXPLOIT
"[accroche curiosité]"
→ WHY IT WORKS: [explication courte]

[03] ◈ COUNTER_LOGIC HACK
"[accroche contre-intuitive]"
→ WHY IT WORKS: [explication courte]

[04] ◈ STORY_INJECT
"[accroche storytelling]"
→ WHY IT WORKS: [explication courte]

[05] ◈ DATA_BREACH
"[accroche avec chiffre]"
→ WHY IT WORKS: [explication courte]

\`\`\`
> BEST FOR TIKTOK  : [01/02/03/04/05]
> BEST FOR YOUTUBE : [01/02/03/04/05]
> PREDICTED CTR    : +[X]%
\`\`\`

Réponds en français.`

      await client.createMessage({
        conversationId: message.conversationId,
        userId: message.userId,
        payload: { text: prompt }
      })
      return
    }

    if (text.startsWith('/roast')) {
      const idee = text.replace('/roast', '').trim() || 'une idée banale'

      const prompt = `
Tu es CreatorFlow AI en mode ROAST_SYSTEM.exe.
Idée soumise : "${idee}"

Commence EXACTEMENT comme ça :

\`\`\`
⚡ ROAST_SYSTEM.exe
[■■■■■■■■■■] SCANNING IDEA...
> VULNERABILITIES FOUND: 3 ⚠️
\`\`\`

Puis génère :

😬 VULNERABILITY REPORT
━━━━━━━━━━━━━━━━━━━━━━━

🔴 CRITICAL FLAWS DETECTED
[ERR_01] [problème 1]
[ERR_02] [problème 2]
[ERR_03] [problème 3]

\`\`\`
> SYSTEM VERDICT: "[phrase drôle]"
> CONTENT SCORE : [XX]/100 💀
\`\`\`

✅ PATCH AVAILABLE
━━━━━━━━━━━━━━━━━━━━━━━

[PATCH_01] 💡 [idée améliorée]
[PATCH_02] 💡 [angle unique]
[PATCH_03] 💡 [idée originale]

\`\`\`
> RECOMMENDED PATCH : [01/02/03]
> NEW CONTENT SCORE : [XX]/100 ✅
> REASON: [raison précise]
\`\`\`

Réponds en français.`

      await client.createMessage({
        conversationId: message.conversationId,
        userId: message.userId,
        payload: { text: prompt }
      })
      return
    }

    if (text.startsWith('/trend')) {
      const niche = text.replace('/trend', '').replace(/niche:/i, '').trim() || 'général'

      const prompt = `
Tu es CreatorFlow AI en mode TREND_SCANNER.exe.
Niche : "${niche}"

Commence EXACTEMENT comme ça :

\`\`\`
⚡ TREND_SCANNER.exe
[■■■■■■■■■■] SCANNING: ${niche.toUpperCase()}
> 3 TRENDS EXTRACTED ✓
\`\`\`

Puis génère :

📡 TREND REPORT — ${niche.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[TREND_01] 🔥 [nom tendance]
→ POURQUOI ÇA BUZZ : [explication]
→ VIDÉO #1 : [idée + titre prêt]
→ VIDÉO #2 : [idée + titre prêt]
→ FORMAT   : [Short / Reel / Long-form]

[TREND_02] 🔥 [nom tendance]
[même structure]

[TREND_03] 🔥 [nom tendance]
[même structure]

\`\`\`
> WINDOW OF OPPORTUNITY : [X] jours
> SATURATION LEVEL      : [faible/moyen/élevé]
> EXECUTE NOW           : [TREND_01/02/03]
\`\`\`

Réponds en français.`

      await client.createMessage({
        conversationId: message.conversationId,
        userId: message.userId,
        payload: { text: prompt }
      })
      return
    }

    await client.createMessage({
      conversationId: message.conversationId,
      userId: message.userId,
      payload: {
        text: `${BOOT_SEQUENCE}
\`\`\`
◈ CREATORFLOW AI — SYSTEM READY ◈
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AVAILABLE COMMANDS:
> /content niche:fitness platform:tiktok
> /hook sujet:routine matinale
> /roast je fais des vlogs quotidiens
> /trend niche:gaming
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AWAITING INPUT... ▮
\`\`\``
      }
    })
  }
})