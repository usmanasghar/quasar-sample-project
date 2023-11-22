// FILE: main.ts

import {App, createApp} from 'vue';
import {Quasar, Notify, Dialog, Loading, QuasarPluginOptions} from 'quasar';
import quasarLang from 'quasar/lang/en-US';
import quasarIconSet from 'quasar/icon-set/svg-fontawesome-v5';
import {createI18n} from 'vue-i18n';
import HelperService from './services/helper.service';
import router from './router';
import translations from './assets/json/translations.json';
import store from './stores';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import '@quasar/extras/ionicons-v4/ionicons-v4.css';

// Import Quasar css
import 'quasar/src/css/index.sass';


// Assumes your root component is App.vue
// and placed in same folder as main.js
import AppRoot from './App.vue';


const app: App<Element> = createApp(AppRoot);

Quasar.lang.set(quasarLang);
Notify.setDefaults({position: 'top-right'});

const quasarConfig: QuasarPluginOptions = {
  plugins: {Notify, Dialog, Loading},
  iconSet: HelperService.overrideQuasarIcons(quasarIconSet),
} as QuasarPluginOptions;


const i18n = createI18n({
  legacy: false,
  locale: 'dk',
  fallbackLocale: 'en',
  messages: translations,
});

app
  .use(store)
  .use(Quasar, quasarConfig)
  .use(i18n)
  .use(router)
  .mount('#app');

