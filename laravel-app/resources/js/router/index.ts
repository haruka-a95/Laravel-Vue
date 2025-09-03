import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Todo from '../views/Todo.vue';
import Product from '../views/Product.vue';
import Category from '../views/Category.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/todo', name: 'Todo', component: Todo },
  { path: '/product', name: 'Product', component: Product},
  { path: '/category', name: 'Category', component: Category},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
