import { createRouter, createWebHistory } from 'vue-router';
import AuthGuard from '../components/common/AuthGuard.vue';
import LoginView from '../views/auth/LoginView.vue';
import UserListView from '../views/users/UserListView.vue';
import UserDetailView from '../views/users/UserDetailView.vue';
import UserEditView from '../views/users/UserEditView.vue';
import AttendanceListView from '../views/attendance/AttendanceListView.vue';
import PenaltyListView from '../views/penalties/PenaltyListView.vue';
import PenaltyFinedView from '../views/penalties/PenaltyFinedView.vue';
import AdminDashboard from '../views/dashboard/AdminDashboard.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import AuthLayout from '../layouts/AuthLayout.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { layout: AuthLayout }
  },
  {
    path: '/',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: AdminDashboard
      },
      {
        path: 'users',
        name: 'UserList',
        component: UserListView
      },
      {
        path: 'users/:id',
        name: 'UserDetail',
        component: UserDetailView
      },
      {
        path: 'users/:id/edit',
        name: 'UserEdit',
        component: UserEditView
      },
      {
        path: 'attendance',
        name: 'AttendanceList',
        component: AttendanceListView
      },
      {
        path: 'penalties',
        name: 'PenaltyList',
        component: PenaltyListView
      },
      {
        path: 'penalties/fined',
        name: 'PenaltyFined',
        component: PenaltyFinedView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Kiểm tra token
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
