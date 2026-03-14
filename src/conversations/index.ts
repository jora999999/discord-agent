import { Conversation } from '@botpress/runtime'

export default new Conversation({
  channel: '*',
  handler: async ({ message, client, execute }: any) => {
    const text = message?.text?.trim() ?? message?.payload?.text?.trim() ?? ''

    const send = async (content: string) => {
      await client.createMessage({
        conversationId: message.conversationId,
        userId: message.userId,
        type: 'text',
        tags: {},
        payload: {
          type: 'text',
          text: content,
        },
      })
    }

    const normalizePlatform = (raw: string | undefined) => {
      const value = (raw ?? '').trim().toLowerCase()

      const aliases: Record<string, string> = {
        instagram: 'Instagram',
        instargram: 'Instagram',
        insta: 'Instagram',

        tiktok: 'TikTok',
        'tik-tok': 'TikTok',
        tiktokk: 'TikTok',
        tt: 'TikTok',

        youtube: 'YouTube',
        yourube: 'YouTube',
        youtuve: 'YouTube',
        yt: 'YouTube',

        linkedin: 'LinkedIn',
        linkedln: 'LinkedIn',
        linkdin: 'LinkedIn',
      }

      return aliases[value] ?? null
    }

    const normalizeNiche = (raw: string | undefined) => {
      const value = (raw ?? '').trim()

      if (!value) return null
      if (value.length < 2) return null

      return value
    }

    if (text.startsWith('/content')) {
      const rawNiche = text.match(/niche:([^\s]+)/i)?.[1]
      const rawPlatform = text.match(/platform:([^\s]+)/i)?.[1]

      const niche = normalizeNiche(rawNiche)
      const platform = normalizePlatform(rawPlatform)

      if (!niche) {
        await execute({
          instructions: `
Réponds exactement avec ce message, sans rien ajouter :

Niche invalide. Donne une niche claire d’au moins 2 caractères.
Exemple : /content niche:fitness platform:instagram
          `,
        })
        return
      }

      if (!platform) {
        await execute({
          instructions: `
Réponds exactement avec ce message, sans rien ajouter :

Plateforme non reconnue. Utilise : TikTok, Instagram, YouTube ou LinkedIn.
Exemple : /content niche:fitness platform:instagram
          `,
        })
        return
      }

      await execute({
        instructions: `
Tu es CreatorFlow AI, un assistant expert en stratégie de contenu.

Tâche :
Génère un content matrix de 2 semaines pour la niche "${niche}" sur ${platform}.

Contraintes importantes :
- Réponds en français.
- Sois concret, crédible, moderne et utile.
- Adapte vraiment les formats à ${platform}.
- Évite les phrases bizarres, répétitives ou trop vagues.
- Donne de vraies idées, pas des placeholders.

Format de réponse obligatoire :

CREATORFLOW_AI
CONTENT MATRIX — ${niche.toUpperCase()} × ${platform.toUpperCase()}

SEMAINE 1
LUNDI
Titre : ...
Accroche : ...
Format : ...

MERCREDI
Titre : ...
Accroche : ...
Format : ...

VENDREDI
Titre : ...
Accroche : ...
Format : ...

SEMAINE 2
LUNDI
Titre : ...
Accroche : ...
Format : ...

MERCREDI
Titre : ...
Accroche : ...
Format : ...

VENDREDI
Titre : ...
Accroche : ...
Format : ...

Conseil de la semaine : ...

La sortie doit être propre et directement montrable à un jury.
        `,
      })
      return
    }

    if (text.startsWith('/hook')) {
      const sujet =
        text.replace('/hook', '').replace(/sujet:/i, '').trim() || 'contenu général'

      await execute({
        instructions: `
Tu es CreatorFlow AI, expert en hooks viraux.

Sujet : "${sujet}"

Donne 5 hooks en français.
Ils doivent être naturels, modernes, crédibles et adaptés aux créateurs de contenu.

Format obligatoire :
1. Hook : ...
   Pourquoi ça fonctionne : ...
        `,
      })
      return
    }

    if (text.startsWith('/roast')) {
      const idee = text.replace('/roast', '').trim() || 'une idée banale'

      await execute({
        instructions: `
Tu es CreatorFlow AI en mode roast intelligent.

Idée : "${idee}"

Réponds en français.
1. Fais un roast drôle mais pas insultant.
2. Explique les 3 vrais problèmes de l’idée.
3. Propose 3 améliorations concrètes.
4. Termine par une recommandation claire.
        `,
      })
      return
    }

    if (text.startsWith('/trend')) {
      const rawNiche = text.replace('/trend', '').replace(/niche:/i, '').trim()
      const niche = normalizeNiche(rawNiche)

      if (!niche) {
        await execute({
          instructions: `
Réponds exactement avec ce message, sans rien ajouter :

Niche invalide pour /trend. Donne une niche claire d’au moins 2 caractères.
Exemple : /trend niche:gaming
          `,
        })
        return
      }

      await execute({
        instructions: `
Tu es CreatorFlow AI en mode trend scanner.

Niche : "${niche}"

Donne 3 tendances en français avec :
- le nom de la tendance
- pourquoi ça buzz
- 2 idées de vidéos
- le format recommandé

Important :
- Si tu n’as pas de source temps réel branchée, reste prudent et formule les tendances comme des pistes crédibles, pas comme des faits garantis.
- Sois clair, utile et structuré.
        `,
      })
      return
    }

    await send(`Commandes disponibles :
/content niche:fitness platform:tiktok
/hook sujet:routine matinale
/roast je fais des vlogs quotidiens
/trend niche:gaming`)
  },
})