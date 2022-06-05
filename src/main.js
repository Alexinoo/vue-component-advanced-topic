import { createApp } from 'vue';

import App from './App.vue';

// Global Component - 
import BaseBadge from './components/BaseBadge.vue';


const app = createApp(App);

//Registered Globally - used in multiple components
app.component('base-badge', BaseBadge);


app.mount('#app');
