import Cadastro from './components/cadastro/Cadastro';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', component: Home},
    { path: '/cadastro', component: Cadastro}
];