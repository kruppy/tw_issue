import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import Home from '../views/Home.vue'

import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'
import Leads from '../views/dashboard/Leads.vue'
import Lead from '../views/dashboard/Lead.vue'
import AddLead from '../views/dashboard/AddLead.vue'
import EditLead from '../views/dashboard/EditLead.vue'
import AddTeam from '../views/dashboard/AddTeam.vue'
import Companys from "@/views/dashboard/Company/Companys"
import Company from "@/views/dashboard/Company/Company"
import EditCompany from "@/views/dashboard/Company/EditCompany";
import AddCompany from "@/views/dashboard/Company/AddCompany";
import Jobs from "@/views/dashboard/Job/Jobs";
import Job from "@/views/dashboard/Job/Job";
import AddJob from "@/views/dashboard/Job/AddJob";
import EditJob from "@/views/dashboard/Job/EditJob";
import Topics from "@/views/dashboard/Topic/Topics";
import AddTopic from "@/views/dashboard/Topic/AddTopic";
import Topic from "@/views/dashboard/Topic/Topic";
import EditTopic from "@/views/dashboard/Topic/EditTopic";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/add-team',
    name: 'AddTeam',
    component: AddTeam,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/leads',
    name: 'Leads',
    component: Leads,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/leads/add',
    name: 'AddLead',
    component: AddLead,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/leads/:id',
    name: 'Lead',
    component: Lead,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/leads/:id/edit',
    name: 'EditLead',
    component: EditLead,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/companys',
    name: 'Companys',
    component: Companys,
  },
  {
    path: '/dashboard/companys/add',
    name: 'AddCompany',
    component: AddCompany,
  },
  {
    path: '/dashboard/company/:id',
    name: 'Company',
    component: Company,
  },
  {
    path: '/dashboard/company/:id/edit',
    name: 'EditCompany',
    component: EditCompany,
  },
  {
    path: '/dashboard/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/dashboard/jobs/add',
    name: 'AddJob',
    component: AddJob,
  },
  {
    path: '/dashboard/job/:id',
    name: 'Job',
    component: Job,
  },
  {
    path: '/dashboard/job/:id/edit',
    name: 'EditJob',
    component: EditJob,
  },
  {
    path: '/dashboard/topics',
    name: 'Topics',
    component: Topics,
  },
  {
    path: '/dashboard/topics/add',
    name: 'AddTopic',
    component: AddTopic,
  },
  {
    path: '/dashboard/topic/:id',
    name: 'Topic',
    component: Topic,
  },
  {
    path: '/dashboard/topic/:id/edit',
    name: 'EditTopic',
    component: EditTopic,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})

export default router
