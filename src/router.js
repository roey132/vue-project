import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "./components/homepage/HomePage.vue"
import Gallery from "./components/gallery/Gallery.vue"
import Contact from "./components/contact_page/ContactPage.vue"
import CategoryGallery from "./components/gallery/CategoryGallery.vue"

export const routes = [
    { path: '/', component: HomePage, name: 'עמוד בית', meta: { button: true } },
    { path: '/gallery', component: Gallery, name: 'גלריה', meta: { button: true } },
    { path: '/contact', component: Contact, name: 'צור קשר', params: true, meta: { button: true } },
    { path: '/gallery/:category', component: CategoryGallery }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router;