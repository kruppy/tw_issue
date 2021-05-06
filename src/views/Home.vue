<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="w-5 h-5">
  </div>
  <router-link
      :to="{name:'SignUp'}"
      class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
    Signup
  </router-link>
  <router-link
      :to="{name:'LogIn'}"
      class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
    Login
  </router-link>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
