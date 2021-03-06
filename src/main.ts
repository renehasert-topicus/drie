import { Component, createApp, h } from 'vue';
import App from './App.vue';
import Landscape from './components/Landscape.vue';
import Test from './components/Test.vue';

const NotFoundComponent = { template: '<p>Page not found</p>' };
const routes: Record<string, Component> = {
    '/': App,
    '/landscape': Landscape,
    '/test': Test
};

const routedApp: Component = {
    data: () => ({
        currentRoute: window.location.pathname
    }),

    computed: {
        CurrentComponent(): Component {
            return routes[this.currentRoute] || NotFoundComponent;
        }
    },

    render(): Component {
        return h(this.CurrentComponent);
    }
};

createApp(routedApp).mount('#app');
