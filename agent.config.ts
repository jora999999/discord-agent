import { defineConfig } from "@botpress/runtime";

export default defineConfig({
  name: "Izza",
  description: "An AI agent built with Botpress ADK",
  defaultModels: {
    autonomous: "cerebras:gpt-oss-120b",
    zai: "cerebras:gpt-oss-120b",
  },
  dependencies: {
    integrations: {
      chat: { version: "chat@0.7.6", enabled: true },
      webchat: { version: "webchat@0.3.0", enabled: true },
    },
  },
});