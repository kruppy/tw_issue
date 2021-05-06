<template>
  <div>
    <h1> Edit {{ job.job_name }}</h1>
  </div>
  <form @submit.prevent="submitForm">
    <label>Description</label>
    <div class="control">
      <input type="text" class="input" v-model="job.description">
    </div>
    <label>Contact</label>
    <div class="control mb-2">
      <input type="text" class="input" v-model="job.contact_person">
    </div>
    <button class="bg-blue-500 rounded-full p-2">Update</button>
  </form>

</template>

<script>
import axios from 'axios'

export default {
  name: "EditJob",
  data() {
    return {
      job: {}
    }
  },
  mounted() {
    this.getJob()
  },
  methods: {
    async getJob() {
      this.$store.commit('setIsLoading', true)

      const jobID = this.$route.params.id

      axios
          .get(`/api/v1/jobs/${jobID}/`)
          .then(response => {
            this.job = response.data
          })
          .catch(error => {
            console.log(error)
          })

      this.$store.commit('setIsLoading', false)
    },
    async submitForm() {
      this.$store.commit('setIsLoading', true)

      const jobID = this.$route.params.id

      axios
          .patch(`/api/v1/jobs/${jobID}/`, this.job)
          .then(response => {
            console.log("update successful")

            this.$router.push(`/dashboard/job/${jobID}`)
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
