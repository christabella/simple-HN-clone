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
            <a href="#" @click="vote(topic.id, -1)">
              <span class="icon is-medium">
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div class="media-content">
            <div class="content topic-content">
                {{ topic.topic }}
            </div>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span>{{ topic.votes }} votes</span>
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
 @media only screen and (min-width : 1224px) {
   .container {
     margin: 10px;
   }
   .topic {
     margin-left: 10rem;
     margin-right: 10rem;
   }
 }
 .topics-container {
   margin-top: 1rem;
 }
 .topic-content {
   word-break: break-word;
   width: 98%
 }
 .topic {
   margin-left: 1rem;
   margin-right: 1rem;
   margin-bottom: 0.5rem !important;
 }
 html {
   background-color: whitesmoke;
 }
</style>
