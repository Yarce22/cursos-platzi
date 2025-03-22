import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: 'jsdom', 
    globals: true,
    setupFiles: ['./src/setupTest.ts'],
    coverage: {
      exclude: [
        "**/*.config.ts",
        "**/*.config.js",
        "**/*.type.ts",
        "**/*.d.ts",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.stories.tsx",
        "**/*.stories.ts",
        "**/*.stories.js",
        "src/mocks/*",
        "src/setupTest.ts",
        "src/index.tsx",
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/vite.config.ts",
        "src/components/OrderItem/OrderItem.test.tsx",
        "src/containers/Orders/useOrdersMsw.test.tsx",
        "src/hooks/useOrdersMsw.test.tsx",
      ]
    }
  }
})