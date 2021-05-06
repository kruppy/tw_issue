<template>
  <div>
    <h1 class="font-bold">{{ company.company_name }}</h1>
    <p>{{ company.description }}</p>
    <p>{{ company.sector }}</p>
    <!-- todo: ADD LIST OF TOPICS -->
    <router-link :to="{ name: 'EditCompany', params: { id: company.id }}"
                 class="mt-2 bg-green-700 text-white px-3 py-2">Edit
    </router-link>
  </div>

</template>

<script>import axios from 'axios'

export default {
  name: 'Company',
  data() {
    return {
      company: {}
    }
  },
  mounted() {
    this.getCompany()
  },
  methods: {
    async getCompany() {
      this.$store.commit('setIsLoading', true)

      const companyID = this.$route.params.id

      axios
          .get(`/api/v1/companys/${companyID}/`)
          .then(response => {
            this.company = response.data
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
