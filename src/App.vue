<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex"

export default {
  data(){
    return{
      publicPath: process.env.BASE_URL
    }
  },
  computed:{
        ...mapState(["like", "movies","page","total_pages"])
    },
  methods:{
    ...mapActions(["getPopularMovies"])
  },
  mounted() {
    //console.log("sdsdsdsd");
    //let locationURL = new URL(window.location.href)
    
    //alert(this.page);
    this.getPopularMovies();
  }
}
</script>

<style>

</style>
