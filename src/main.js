import { createApp } from 'vue';

import App from './App.vue';

// Global Component - 
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';


const app = createApp(App);

//Registered Globally - used in multiple components
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);


app.mount('#app');
