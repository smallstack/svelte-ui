import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  // This will keep running your existing tests.
  // If you don't need to run those in Node.js anymore,
  // You can safely remove it from the workspace file
  // Or move the browser test configuration to the config file.
  'vite.config.ts',
  {
    extends: 'vite.config.ts',
    test: {
      environment: "jsdom",
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
        // https://playwright.dev
        providerOptions: {},
      },
    },
  },
])
