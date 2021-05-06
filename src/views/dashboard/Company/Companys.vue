<template>

  <div v-for="company in companys" v-bind:key="company.id">
    <p>{{ company.company_name }}</p>
    <router-link :to="{ name: 'Company', params: { id: company.id }}">Details</router-link>
  </div>




</template>

<script>

import axios from 'axios'

export default {
  name: 'Companys',
  data() {
    return {
      companys: []
    }
  },
  mounted() {
    this.getCompanys()
  },
  methods: {
    async getCompanys() {
      this.$store.commit('setIsLoading', true)

      axios
          .get('/api/v1/companys/')
          .then(response => {
            this.companys = response.data
          })
          .catch(error => {
            console.log(error)
          })

      this.$store.commit('setIsLoading', false)
    }
  }
}


</script>

<style scoped>

</style>
