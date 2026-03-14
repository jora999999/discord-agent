import { z, defineConfig } from "@botpress/runtime";

export default defineConfig({
  name: "CreatorFlow",
  description: "AI Content Creator Coach",

  defaultModels: {
    autonomous: "cerebras:gpt-oss-120b",
    zai: "cerebras:gpt-oss-120b",
  },

  bot: { state: z.object({}) },
  user: { state: z.object({}) },

  dependencies: {
    integrations: {
      discord: {
        version: "shell/discord@0.1.0",
        enabled: true,
        config: {
          botToken: process.env.DISCORD_TOKEN ?? '',
        },
      },
    },
  },
});