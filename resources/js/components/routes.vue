import Dashboard from './components/Dashboard.vue';
import Contact from './components/Contact.vue';
import Services from './components/Services.vue';

 export const routes = [
    {
        name: 'home',
        path: '/',
        component: Dashboard
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'services',
        path: '/services',
        component: Services
    }
]
