import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";

import "./assets/style.css";
import AppWrapper from "./views/AppWrapper.vue";
import AppField from "./components/AppField.vue";
import AppButton from "./components/AppButton.vue";
import AppLoading from "./components/AppLoading.vue";

import VueGtag from "vue-gtag-next";
const app = createApp(App);

const { VUE_APP_GTAG_ID } = process.env;

app.use(store, key);

if (VUE_APP_GTAG_ID) {
  app.use(VueGtag, {
    property: {
      id: VUE_APP_GTAG_ID,
    },
  });
}

app.component("AppWrapper", AppWrapper);
app.component("AppField", AppField);
app.component("AppButton", AppButton);
app.component("AppLoading", AppLoading);

app.use(router);
app.mount("#app");
