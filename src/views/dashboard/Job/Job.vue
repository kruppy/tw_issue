<template>
<div>
  <h1>{{ job.job_name}}</h1>
  <p class="mb-2">{{ job.location}}</p>
  <router-link :to="{ name: 'EditJob', params: { id: job.id }}"
               class="bg-green-700 text-white px-3 py-2">Edit
  </router-link>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Job",
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
    }
  }
}
</script>

<style scoped>

</style>
