import { createApp } from "vue";
import App from "./App.vue";
import highlight from '@/directives/highlights'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App);

app.directive('highlight', highlight)

app.mount('#app')