import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "./components/homepage/HomePage.vue"
import Gallery from "./components/gallery/Gallery.vue"
import Contact from "./components/contact_page/ContactPage.vue"


export const routes = [
    { path: '/', component: HomePage, name: 'עמוד בית', meta: { button: true } },
    { path: '/gallery', component: Gallery, name: 'גלריה', meta: { button: true } },
    { path: '/contact', component: Contact, name: 'צור קשר', meta: { button: true } }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;