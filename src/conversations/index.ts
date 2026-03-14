import { Conversation } from '@botpress/runtime'

export default new Conversation({
  channel: '*',
  handler: async ({ message, client, conversation }: any) => {
    const text = message?.payload?.text?.trim() ?? ''

    const send = async (content: string) => {
      await conversation.send({
        // conversationId: message.conversationId,
        // userId: message.userId,
        type: 'text',
        // tags: {},
        payload: { text: content }
      })
    }

    if (text.startsWith('/content')) {
      const niche    = text.match(/niche:(\w+)/i)?.[1]    ?? 'général'
      const platform = text.match(/platform:(\w+)/i)?.[1] ?? 'youtube'
      await send(`Tu es CreatorFlow AI, style hacker/cyber.\nNiche : "${niche}" | Plateforme : ${platform}\n\nCommence EXACTEMENT comme ça :\n\`\`\`\n⚡ CREATORFLOW_AI.exe\n[■■■■■■■■■■] SCANNING NICHE: ${niche.toUpperCase()}...\n> CONTENT MATRIX GENERATED ✓\n\`\`\`\n\n🗓️ CONTENT MATRIX — ${niche.toUpperCase()} × ${platform.toUpperCase()}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSEMAINE 1\n📌 LUNDI    ⚡ [titre] | 🎯 [hook] | 📡 [format]\n📌 MERCREDI ⚡ [titre] | 🎯 [hook] | 📡 [format]\n📌 VENDREDI ⚡ [titre] | 🎯 [hook] | 📡 [format]\n\nSEMAINE 2\n📌 LUNDI    ⚡ [titre] | 🎯 [hook] | 📡 [format]\n📌 MERCREDI ⚡ [titre] | 🎯 [hook] | 📡 [format]\n📌 VENDREDI ⚡ [titre] | 🎯 [hook] | 📡 [format]\n\n\`\`\`\n◈ HACK OF THE WEEK : [conseil spécifique pour ${niche}]\n\`\`\`\n\nRéponds en français. Ultra-concret.`)
      return
    }

    if (text.startsWith('/hook')) {
      const sujet = text.replace('/hook', '').replace(/sujet:/i, '').trim() || 'contenu général'
      await send(`Tu es CreatorFlow AI, expert accroches virales.\nSujet : "${sujet}"\n\nCommence EXACTEMENT comme ça :\n\`\`\`\n⚡ HOOK_CRACKER.exe\n[■■■■■■■■■■] ANALYZING: "${sujet}"\n> 5 VIRAL HOOKS EXTRACTED ✓\n\`\`\`\n\n[01] ◈ SHOCK     → "[accroche]" | WHY: [raison]\n[02] ◈ CURIOSITY → "[accroche]" | WHY: [raison]\n[03] ◈ COUNTER   → "[accroche]" | WHY: [raison]\n[04] ◈ STORY     → "[accroche]" | WHY: [raison]\n[05] ◈ DATA      → "[accroche]" | WHY: [raison]\n\n\`\`\`\n> BEST TIKTOK : [numéro] | BEST YOUTUBE : [numéro]\n\`\`\`\n\nRéponds en français.`)
      return
    }

    if (text.startsWith('/roast')) {
      const idee = text.replace('/roast', '').trim() || 'une idée banale'
      await send(`Tu es CreatorFlow AI mode ROAST_SYSTEM.exe.\nIdée : "${idee}"\n\nCommence EXACTEMENT comme ça :\n\`\`\`\n⚡ ROAST_SYSTEM.exe\n[■■■■■■■■■■] VULNERABILITIES FOUND ⚠️\n\`\`\`\n\n[ERR_01] [problème 1]\n[ERR_02] [problème 2]\n[ERR_03] [problème 3]\n\n\`\`\`\n> VERDICT: "[phrase drôle]"\n> SCORE  : [XX]/100 💀\n\`\`\`\n\n[PATCH_01] 💡 [idée améliorée]\n[PATCH_02] 💡 [angle unique]\n[PATCH_03] 💡 [idée originale]\n\n\`\`\`\n> RECOMMENDED : PATCH_[0X] | NEW SCORE : [XX]/100 ✅\n\`\`\`\n\nRéponds en français.`)
      return
    }

    if (text.startsWith('/trend')) {
      const niche = text.replace('/trend', '').replace(/niche:/i, '').trim() || 'général'
      await send(`Tu es CreatorFlow AI mode TREND_SCANNER.exe.\nNiche : "${niche}"\n\nCommence EXACTEMENT comme ça :\n\`\`\`\n⚡ TREND_SCANNER.exe\n[■■■■■■■■■■] SCANNING: ${niche.toUpperCase()} ✓\n\`\`\`\n\n[TREND_01] 🔥 [tendance]\n→ POURQUOI ÇA BUZZ : [explication]\n→ VIDÉO #1 : [idée + titre]\n→ VIDÉO #2 : [idée + titre]\n→ FORMAT : [Short/Reel/Long-form]\n\n[TREND_02] 🔥 [même structure]\n[TREND_03] 🔥 [même structure]\n\n\`\`\`\n> EXECUTE NOW : [TREND_0X] | WINDOW : [X] jours\n\`\`\`\n\nRéponds en français.`)
      return
    }

    await send(`\`\`\`\n⚡ CREATORFLOW_AI.exe ⚡\n[■■■■■■■■■■] 100%\n◈ SYSTEM READY ◈\n\`\`\`\n\`\`\`\nCOMMANDS:\n> /content niche:fitness platform:tiktok\n> /hook sujet:routine matinale\n> /roast je fais des vlogs\n> /trend niche:gaming\nAWAITING INPUT... ▮\n\`\`\``)
  }
})