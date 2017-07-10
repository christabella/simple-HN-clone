<template>
  <section class="container is-fluid">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="icon is-large">
            <i class="fa fa-newspaper-o" aria-hidden="true"></i>
          </span>
          <span class="navbar-item title" href="/">
            Simple HN Clone
          </span>
        </a>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          
          <div class="navbar-item">
            <p class="control">
              <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                <span class="icon">
                  <i class="fa fa-pencil-square-o"></i>
                </span>
                <span>Submit topic</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </nav>

    <div class="tile is-vertical topics-container">
      <div v-for="topic in topics" class="box topic is-fullwidth">
        <article class="media">
          <div class="media-left">
            <a class="upvote" href="#" @click="vote(1)">
              <span class="icon is-medium">
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
              </span>
            </a>
            <a class="" href="#"  @click="vote(-1)">
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

 export default {
   components: {
     Logo
   },
   async asyncData () {
     let { data } = await axios.get('http://localhost:8080/topics')
     return { topics: data }
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
