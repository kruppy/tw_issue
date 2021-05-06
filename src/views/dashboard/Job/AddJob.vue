<template>
  <div>
    <form @submit.prevent="submitForm">
      <h1 class="font-bold">Add job</h1>
      <div>
        <label>Add name of job</label>
        <div>
          <input type="text" class="bg-gray-200" v-model="job_name">
        </div>
      </div>

      <div>
        <label>Add company (now only number</label>
        <div>
          <input type="number" class="bg-gray-200" v-model="company">
        </div>
      </div>

      <div>
        <label>Description</label>
        <div>
          <input type="text" class="bg-gray-200" v-model="description">
        </div>
      </div>

      <div>
        <label>Contact (now only number</label>
        <div>
          <input type="number" class="bg-gray-200" v-model="contact_person">
        </div>
      </div>
      <div>
        <label>Location</label>
        <div>
          <input type="text" class="bg-gray-200" v-model="location">
        </div>
      </div>

    <button class="mt-4 bg-blue-400 font-bold text-white">Add Job</button>

    </form>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "AddJob",
  data() {
    return {
      job_name: '',
      company: '',
      description: '',
      contact_person: '',
      location: '',
    }
  },
  methods: {
    async submitForm() {
      this.$store.commit('setIsLoading', true)

      const job = {
        job_name: this.job_name,
        company: this.company,
        description: this.description,
        contact_person: this.contact_person,
        location: this.location,
      }

      await axios
          .post('/api/v1/jobs/', job)
          .then(response => {
            console.log("added job")

            this.$router.push('/dashboard/jobs')
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
