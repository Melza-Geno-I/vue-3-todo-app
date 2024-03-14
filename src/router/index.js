import { createWebHistory, createRouter } from "vue-router";
import App from "@/App.vue";
import LoginView from "../views/LoginView.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: App,
    },
    {
        path: "/Login",
        name: "Login",
        component: LoginView,
    },
    {
        path: "/Todo",
        name: "Todo",
        component: ()=>import('../views/TodoView.vue') //lazy load of component
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;