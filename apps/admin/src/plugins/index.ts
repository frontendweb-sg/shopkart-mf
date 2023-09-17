/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import router from "../AppRoutes";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  app.use(router);
}
