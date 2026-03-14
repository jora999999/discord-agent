import { Conversation } from '@botpress/runtime'

export default new Conversation({
  channel: '*',
  handler: async ({ message, client }: any) => {
    const text = message?.payload?.text?.trim() ?? ''

    if (text.startsWith('/content')) {
      const niche    = text.match(/niche:(\w+)/i)?.[1]    ?? 'général'
      const platform = text.match(/platform:(\w+)/i)?.[1] ?? 'youtube'
      await client.createMessage({
        conversationId: message.conversationId,
        userId: message.userId,
        payload: {
          text: `Tu es CreatorFlow AI, style hacker/cyber.\nNiche : "${niche}" | Plateforme : ${platform}\n\nCommence EXACTEMENT comme ça :\n\`\`\`\n⚡ CREATORFLOW_AI.exe\n[■■■■■■■■■■] SCANNING NICHE: ${niche.toUpperCase()}...\n> CONTENT MATRIX GENERATED ✓\n\`\`\`\n\n🗓️ CONTENT MATRIX — ${niche.toUpperCase()} × ${platform.toUpperCase()}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSEMAINE 1\n📌 LUNDI\n  ⚡ TITRE : [titre ultra-spécifique]\n  🎯 HOOK  : [accroche qui arrête le scroll]\n  📡 FORMAT: [Short 60s / Reel / Long-form]\n\n📌 MERCREDI\n  ⚡ TITRE : [titre]\n  🎯 HOOK  : [accroche]\n  📡 FORMAT: [format]\n\n📌 VENDREDI\n  ⚡ TITRE : [titre]\n  🎯 HOOK  : [accroche]\n  📡 FORMAT: [format]\n\nSEMAINE 2\n[même structure]\n\n\`\`\`\n◈ HACK OF THE WEEK : [conseil ultra-spécifique pour ${niche}]\n\`\`\`\n\nRéponds en français. Ultra-concret.`
        }
      })
      return
    }

    if (text.startsWith('/hook')) {
      const sujet = text.replace('/hook', '').replace(/sujet:/i, '').trim() || 'contenu général'
      await client.createMessage({
        conversationId: message.conversationId,
        userId: message.userId,
        payload: {
          text: `Tu es CreatorFlow AI, expert en accroches virales.\nSujet : "${sujet}"\n\nCommence EXACTEMENT comme ça :\n\`\`\`\n⚡ HOOK_CRACKER.exe\n[■■■■■■■■■■] ANALYZING: "${sujet}"\n> 5 VIRAL HOOKS EXTRACTED ✓\n\`\`\`\n\n🔥 HOOK DATABASE — "${sujet}"\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[01] ◈ SHOCK PROTOCOL\n"[accroche choc]"\n→ WHY IT WORKS: [explication]\n\n[02] ◈ CURIOSITY EXPLOIT\n"[accroche curiosité]"\n→ WHY IT WORKS: [explication]\n\n[03] ◈ COUNTER_LOGIC HACK\n"[accroche contre-intuitive]"\n→ WHY IT WORKS: [explication]\n\n[04] ◈ STORY_INJECT\n"[accroche storytelling]"\n→ WHY IT WORKS: [explication]\n\n[05] ◈ DATA_BREACH\n"[accroche avec chiffre]"\n→ WHY IT WORKS: [explication]\n\n\`\`\`\n> BEST FOR TIKTOK  : [numéro]\n> BEST FOR YOUTUBE : [numéro]\n> PREDICTED CTR    : +[X]%\n\`\`\`\n\nRéponds en français.`
        }
      })
      return
    }

    if (text.startsWith('/roast')) {
      const idee = text.replace('/roast', '').trim() || 'une idée banale'
      await client.createMessage({
        conversationId: message.conversationId,
        userId: message.userId,
        payload: {
          text: `Tu es CreatorFlow AI en mode ROAST_SYSTEM.exe.\nIdée soumise : "${idee}"\n\nCommence EXACTEMENT comme ça :\n\`\`\`\n⚡ ROAST_SYSTEM.exe\n[■■■■■■■■■■] SCANNING IDEA...\n> VULNERABILITIES FOUND: 3 ⚠️\n\`\`\`\n\n😬 VULNERABILITY REPORT\n━━━━━━━━━━━━━━━━━━━━━━━\n\n🔴 CRITICAL FLAWS DETECTED\n[ERR_01] [problème 1]\n[ERR_02] [problème 2]\n[ERR_03] [problème 3]\n\n\`\`\`\n> SYSTEM VERDICT: "[phrase drôle]"\n> CONTENT SCORE : [XX]/100 💀\n\`\`\`\n\n✅ PATCH AVAILABLE\n━━━━━━━━━━━━━━━━━━━━━━━\n\n[PATCH_01] 💡 [idée améliorée]\n[PATCH_02] 💡 [angle unique]\n[PATCH_03] 💡 [idée originale]\n\n\`\`\`\n> RECOMMENDED PATCH : [numéro]\n> NEW CONTENT SCORE : [XX]/100 ✅\n> REASON: [raison précise]\n\`\`\`\n\nRéponds en français.`
        }
      })
      return
    }

    if (text.startsWith('/trend')) {
      const niche = text.replace('/trend', '').replace(/niche:/i, '').trim() || 'général'
      await client.createMessage({
        conversationId: message.conversationId,
        userId: message.userId,
        payload: {
          text: `Tu es CreatorFlow AI en mode TREND_SCANNER.exe.\nNiche : "${niche}"\n\nCommence EXACTEMENT comme ça :\n\`\`\`\n⚡ TREND_SCANNER.exe\n[■■■■■■■■■■] SCANNING: ${niche.toUpperCase()}\n> 3 TRENDS EXTRACTED ✓\n\`\`\`\n\n📡 TREND REPORT — ${niche.toUpperCase()}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[TREND_01] 🔥 [tendance]\n→ POURQUOI ÇA BUZZ : [explication]\n→ VIDÉO #1 : [idée + titre]\n→ VIDÉO #2 : [idée + titre]\n→ FORMAT   : [Short / Reel / Long-form]\n\n[TREND_02] 🔥 [tendance]\n[même structure]\n\n[TREND_03] 🔥 [tendance]\n[même structure]\n\n\`\`\`\n> WINDOW OF OPPORTUNITY : [X] jours\n> SATURATION LEVEL      : [faible/moyen/élevé]\n> EXECUTE NOW           : [TREND_01/02/03]\n\`\`\`\n\nRéponds en français.`
        }
      })
      return
    }

    await client.createMessage({
      conversationId: message.conversationId,
      userId: message.userId,
      payload: {
        text: `\`\`\`\n⚡ CREATORFLOW_AI.exe ⚡\n[■■■■■■■■■■] 100%\n◈ SYSTEM READY ◈\n\`\`\`\n\`\`\`\nAVAILABLE COMMANDS:\n> /content niche:fitness platform:tiktok\n> /hook sujet:routine matinale\n> /roast je fais des vlogs quotidiens\n> /trend niche:gaming\n━━━━━━━━━━━━━━━━━━━━━━━━\nAWAITING INPUT... ▮\n\`\`\``
      }
    })
  }
})