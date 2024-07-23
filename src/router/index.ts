import {createWebHistory, createRouter, Router} from "vue-router";

import routes from "./routes";

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router;