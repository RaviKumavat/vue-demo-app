import { createRouter, createWebHistory } from 'vue-router';
import QuizStart from '../views/QuizStart.vue';
import QuizPage from '../views/QuizPage.vue';
import QuizResults from '../views/QuizResults.vue';

const routes = [
  {
    path: '/',
    name: 'QuizStart',
    component: QuizStart,
  },
  {
    path: '/quiz',
    name: 'QuizPage',
    component: QuizPage,
  },
  {
    path: '/results',
    name: 'QuizResults',
    component: QuizResults,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;