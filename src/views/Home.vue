<template>
  <div class="">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
     <h1 class="text-center">Cartelera</h1>
    <div class="container">
      <form @submit.prevent="searchMovies($store.state.query)">
        <div class="form-group">
          <label for="">Pelicula:</label>
          <input type="text" class="form-control" v-model="$store.state.query">
          
        </div>
        
      </form>

      <div v-if="Object.keys(searchM).length > 0">
        <div class="row">
            <div v-for="(movie, index) in searchM.results" :key="index" class="col-lg-3 col-md-4 col-12 ">
                <div class="card mb-4" >
                    <img class="card-img-top img-fluid mx-auto"
                    :src="movie.poster_path" style="height: ;" alt="">
                    
                    <div class="card-body">
                        <h5 class="card-title">{{movie.title}}</h5>
                        <hr>
                        <button class="btn" 
                        :class="movie.like ? 'btn-outline-danger' : 'btn-outline-secondary'"
                        @click="movieLike(index)" >
                        <i class="fa fa-heart"></i></button>
                        <button class="btn btn-outline-primary mx-3" ><i class="fa fa-info"></i></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div v-else="Object.keys(searchM).length == 0">
        <movies/>
      </div>

     

     
      

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import movies from"@/components/Movies.vue"
import {mapState, mapMutations, mapActions} from "vuex"

export default {
  name: 'home',
  components: {
    movies
  },
  computed:{
    ...mapState([ "movies","page","total_pages","query","searchM"])
  },
  methods:{
    ...mapActions(["searchMovies"]),
    ...mapMutations(["imgContainer"])
  }
}
</script>
