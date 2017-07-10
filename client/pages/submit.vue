<template>
  <section class="container is-fluid">
    <Navbar/>

    <div class="submit-container">
      <div class="field">
        <label class="label">Topic</label>
        <p class="control">
          <textarea v-model="topic" class="textarea" placeholder="Write your topic here"></textarea>
        </p>
      </div>
      <div class="field is-grouped">
        <a href="#" @click="submit(topic)">
          <p class="control">
            <button class="button is-primary">Submit</button>
          </p>
        </a>
        <p class="control">
          <nuxt-link to="/">
            <button class="button is-link">Cancel</button>
          </nuxt-link>
        </p>
      </div> 
    </div> 
  </section>
</template>

<script>
 import axios from 'axios'
 import Navbar from '~/components/Navbar.vue'

 export default {
   components: {
     Navbar
   },
   data () {
     return {
       topic: ''
     }
   },
   methods: {
     submit (topic) {
<<<<<<< HEAD
=======
       //       var _this = thi
>>>>>>> a925b5801f6f568bde7d8904e3af410d4eed87de
       console.log(JSON.stringify({topic: topic}))
       var params = new URLSearchParams()
       params.append('topic', topic)
       axios.post(`http://localhost:8080/topics`, params)
             .then(() =>
               this.$router.replace({ path: '/' })
             )
             .catch(function (res) {
               alert(res)
             })
     }
   }
 }
</script>

<style>
 .submit-container {
   margin-left: 5rem;
   margin-right: 5rem;
   margin-top: 2rem;
 } 
 html {
   background-color: whitesmoke;
 }
</style>
