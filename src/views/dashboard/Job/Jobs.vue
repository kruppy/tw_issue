<template>
<!-- Todo: add Jobs model in django -->
  <div v-for="job in jobs" v-bind:key="job.id">
    <p>{{ job.job_name }}</p>
    <router-link :to="{ name: 'Job', params: { id: job.id }}">Details</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Jobs',
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    this.getJobs()
  },
  methods: {
    async getJobs() {
      this.$store.commit('setIsLoading', true)

      axios
          .get('/api/v1/jobs/')
      .then(response => {
        this.jobs =response.data
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
