<template>
  <section class="container is-fluid">
    <Navbar/>

    <div class="tile is-vertical topics-container">
      <div v-for="topic in topics" class="box topic is-fullwidth">
        <article class="media">
          <div class="media-left">
            <a class="upvote" href="#" @click="vote(topic.id, 1)">
              <span class="icon is-medium">
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
              </span>
            </a>
            <a class="" href="#"  @click="vote(topic.id, -1)">
              <span class="icon is-medium">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div class="media-content">
            <div class="content">
              {{ topic.topic }}
            </div>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="">{{ topic.votes }} votes</span>
              </a>
            </div>
          </nav>
        </article>
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
   async asyncData () {
     let { data } = await axios.get('http://localhost:8080/topics')
     return { topics: data }
   },
   methods: {
     vote (id, vote) {
       console.log(this.topics)
       var _this = this
       axios.put(`http://localhost:8080/topics/${id}/${vote}`)
            .then(() =>
              axios.get('http://localhost:8080/topics').then(
                function (data) {
                  _this.topics = data.data
                })
            )
            .catch(function (res) {
              alert(res)
            })
     }
   }
 }
</script>

<style>
 .container {
   margin: 10px;
 }
 .topic {
   margin-bottom: 0.5rem !important;
   margin-left: 10rem;
   margin-right: 10rem;
 }
 .topics-container {
   margin-top: 1rem;
 } 
 html {
   background-color: whitesmoke;
 }
</style>
