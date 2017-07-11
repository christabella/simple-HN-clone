<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <span class="icon is-large">
          <i class="fa fa-newspaper-o" aria-hidden="true"></i>
        </span>
        <span class="navbar-item title is-4" href="/">
          Simple HN Clone
        </span>
      </a>
      <div @click="menuIsActive = !menuIsActive" class="navbar-burger burger" data-target="navMenu"  v-bind:class="{ 'is-active': menuIsActive }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenu" class="navbar-menu" v-bind:class="{ 'is-active': menuIsActive }">
      <div class="navbar-end"> 
        <div class="navbar-item">
          <p class="control">
            <nuxt-link class="button is-primary" to="/submit">
              <span class="icon">
                <i class="fa fa-pencil-square-o"></i>
              </span>
              <span>Submit topic</span>
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>
 export default {
   data () {
     return {
       menuIsActive: false
     }
   }
 }
</script>

<style>
</style>
