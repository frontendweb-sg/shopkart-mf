import { createApp } from "vue";
import App from "./App.vue";
import router from "./AppRoutes";
import { registerPlugins } from "@/plugins";
const env = process.env.NODE_ENV;
function mount(el: string | HTMLElement) {
  const app = createApp(App);
  // create app instance

  registerPlugins(app);
  app.mount(el);
}

if (env === "development") {
  const el = document.querySelector("#_root-admin");
  if (el) {
    mount(el as HTMLElement);
  }
}

// mount the instanance

export { mount };
