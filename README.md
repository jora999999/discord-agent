# CreatorFlow AI — Discord Agent

> **Hackathon Project** — AI-powered content strategy coach for creators, built on Discord.

---

##  Le Problème

Sur Reddit (r/NewTubers, r/TikTokCreators), des milliers de créateurs partagent la même frustration chaque semaine :

> *"I post consistently but I'm running out of ideas — I don't even know what to post tomorrow."*

Les outils de création de contenu existent sur le web — mais les créateurs passent leur temps sur **Discord**. CreatorFlow amène le coach directement là où ils sont.

---

## La Solution

**CreatorFlow AI** est un agent Discord qui génère des stratégies de contenu personnalisées en temps réel, grâce à l'IA Cerebras et aux données de tendances via Serper.

---

## Commandes

| Commande | Description | Exemple |
|---|---|---|
| `/content` | Calendrier éditorial 2 semaines | `/content niche:fitness platform:tiktok` |
| `/hook` | 5 accroches virales | `/hook sujet:routine matinale` |
| `/roast` | Critique constructive d'une idée | `/roast je fais des vlogs quotidiens` |
| `/trend` | Tendances de la semaine par niche | `/trend niche:gaming` |
| `/start` | Menu d'aide | `/start` |

---


## ⚙️ Stack Technique

- **Runtime** : Node.js v22 + ES Modules
- **Bot Discord** : discord.js v14
- **IA** : Cerebras API (`llama3.1-8b`) — gratuit et ultra-rapide
- **Tendances** : Serper.dev (Google Search en temps réel)
- **Agent ADK** : Botpress ADK v1.16.6 (intégration Discord `shell/discord@0.1.0`)
- **Config** : dotenv

---

## 🛠️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/jora999999/discord-agent
cd discord-agent
npm install
```

### 2. Créer le fichier `.env`

```env
DISCORD_TOKEN=ton_token_discord
CEREBRAS_API_KEY=ton_api_key_cerebras
SERPER_API_KEY=ton_api_key_serper
```

### 3. Obtenir les clés API

| Clé | Où la trouver | Gratuit ? |
|---|---|---|
| `DISCORD_TOKEN` | discord.com/developers → Bot → Token | ✅ |
| `CEREBRAS_API_KEY` | cloud.cerebras.ai → API Keys | ✅ |
| `SERPER_API_KEY` | serper.dev → Dashboard | ✅ 100 req/mois |

### 4. Lancer le bot

```bash
node discord-bot.js
```

Tu dois voir :
```
✅ CreatorFlow AI en ligne — CreatorFlow#XXXX
```

---

##  Structure du Projet

```
discord-agent/
├── discord-bot.js          ← Bot Discord principal (Cerebras + Serper)
├── src/
│   └── conversations/
│       └── index.ts        ← Agent Botpress ADK
├── agent.config.ts         ← Config ADK (intégration Discord)
├── agent.json              ← IDs Botpress
├── .env                    ← Clés API (ne jamais commit !)
├── .gitignore
└── package.json
```

---

## 🎨 Exemple de Réponse

```
⚡ ROAST_SYSTEM.exe
[■■■■■■■■■■] VULNERABILITIES FOUND ⚠️

[ERR_01] Tout le monde fait des vlogs quotidiens...
[ERR_02] Zéro angle unique ou point de vue différenciant
[ERR_03] Le contenu ne répond à aucune question spécifique

> VERDICT: "Ton vlog est aussi original qu'un café noir un lundi matin"
> SCORE  : 23/100 💀

[PATCH_01] 💡 Vlogs thématiques : "une semaine dans la vie d'un dev"
[PATCH_02] 💡 Défis 30 jours documentés en 60 secondes/jour
[PATCH_03] 💡 Coulisses d'un projet concret avec résultats chiffrés

> RECOMMENDED : PATCH_02 | NEW SCORE : 71/100 ✅
```



## ⚠️ Sécurité

- Ne jamais commit le fichier `.env`
- Le `.gitignore` exclut déjà `.env`
- Régénérer les tokens si accidentellement exposés

---

