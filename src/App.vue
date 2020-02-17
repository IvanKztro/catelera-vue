<template>
  <div id="app" class="" style="background-color: #D5DBDB ">

    <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavBar" >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand"><img src="img/logo.png" class="" style="height: 3.5rem" alt=""></a>
      <div class="collapse navbar-collapse" id="NavBar">
        
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link  class="nav-link" to="/home">Home<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item ">
           <router-link  class="nav-link" to="/favoritas">Favoritas<span class="badge badge-primary">{{contMovieFav}}</span></router-link>
          </li>
          
        </ul>
        <form class="form-inline my-2 my-lg-0" @submit.prevent="searchMovies($store.state.query)" >
          <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><font-awesome-icon icon="search"></font-awesome-icon></span>
                </div>
                <input class="form-control mr-sm-2" type="search" placeholder="Ingrese pelicula" v-model="$store.state.query">
              </div>
              
              <button class="btn btn-outline-primary my-2 my-sm-0" >Buscar</button>
        </form>
      </div>
    </nav>
    
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
//import 'Libraries/css/font-awesome.min.css'
//<link rel="stylesheet" href="Libraries/css/font-awesome.min.css">
import {mapActions, mapState, mapMutations} from "vuex"
import movies from"@/components/Movies.vue"

export default {
  data(){
    return{
      publicPath: process.env.BASE_URL
    }
  },
  components: {
    movies
  },
  computed:{
        ...mapState(["like", "movies","page","total_pages","pageS","total_pagesS","query","searchM","movieDetails","contMovieFav"])
    },
  methods:{
    ...mapActions(["getPopularMovies","searchMovies","setPageSearch","getDetails","getMoviesFav"]),
    ...mapMutations(["imgContainer"])
  },
  mounted() {
    //console.log("sdsdsdsd");
    //let locationURL = new URL(window.location.href)
    
    //alert(this.page);
    this.getPopularMovies();
    this.getMoviesFav();
    
  },
  created() {
  //this.$router.push({ name: 'home'})
},
}
</script>

<style>

</style>
