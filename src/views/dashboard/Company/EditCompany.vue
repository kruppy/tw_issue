<template>
  <div>
    <h1> Edit {{ company.company_name}}</h1>
  </div>
  <form @submit.prevent="submitForm">
    <label>Company Description</label>
    <div class="control">
      <input type="text" class="input" v-model="company.description">
    </div>
    <label>Email</label>
    <div class="control">
      <input type="text" class="input" v-model="company.email">
    </div>
    <label>Sector</label>
    <div class="control">
      <select v-model="company.sector">
        <option value="Accountancy. banking and finance">Accountancy/Banking/Finance</option>
        <option value="Consulting">Consulting</option>
        <option value="Engineering and Manufacturing">Engineering and Manufacturing</option>
      </select>
    </div>
    <button class="bg-blue-500 rounded-full p-2">Update</button>
  </form>

</template>

<script>
import axios from 'axios'

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
    },
    async submitForm() {
      this.$store.commit('setIsLoading', true)

      const companyID = this.$route.params.id

      axios
          .patch(`/api/v1/companys/${companyID}/`, this.company)
          .then(response => {
            console.log("update successful")

            this.$router.push(`/dashboard/company/${companyID}`)
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
