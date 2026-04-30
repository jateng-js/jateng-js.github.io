import DefaultTheme from "vitepress/theme";
import "./custom.css";
import JatengLanding from "./landing/Layout.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("JatengLanding", JatengLanding);
  }
};
