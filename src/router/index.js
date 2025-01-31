import { createRouter, createWebHistory } from "vue-router";
import Blogs from "../components/Blogs.vue";
import BlogView from "../components/BlogView.vue";
import BlogEditor from "../components/BlogEditor.vue";

const routes = [
  { path: "/", component: Blogs },
  { path: "/blog/:id", component: BlogView },
  { path: "/admin", component: BlogEditor },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
