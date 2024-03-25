import { createRouter, createWebHistory } from "vue-router";

import HomeVue from '@/components/HomeVue.vue'
import ClickChange from '@/components/ClickChangeValues.vue'
import ToDoVue from "@/components/ToDoVue.vue";
import InputVue from '@/components/InputData.vue'
import HomeWork1 from '@/components/homeWork/ProfileVue.vue'
import ApiVue from '@/components/ApiVue.vue'

const routes = [
    {
        path: "/",
        component: HomeVue
    },
    {
        path: "/ch",
        component: ClickChange
    },
    {
        path: "/todo",
        component: ToDoVue
    },
    {
        path: "/input",
        component: InputVue
    },
    {
        path: "/h_1",
        component: HomeWork1
    },
    {
        path: "/api",
        component: ApiVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;